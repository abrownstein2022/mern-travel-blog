import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT, UPDATE_THOUGHT, REMOVE_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import Rating from '../Rating';

const ThoughtForm = (props) => {
  const [thoughtText, setThoughtText] = useState(props.thoughtText ?? '');
  const [thoughtCountry, setThoughtCountry] = useState(props.thoughtCountry ?? '');
  const [thoughtCity, setThoughtCity] = useState(props.thoughtCity ?? '');
  const [thoughtLandmark, setThoughtLandmark] = useState(props.thoughtLandmark ?? '');
  const [thoughtRating, setThoughtRating] = useState(props.thoughtRating ?? 0);

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
        
        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const [updateThought, { error: updateError }] = useMutation(UPDATE_THOUGHT);
  const [deleteThought, { error: deleteError }] = useMutation(REMOVE_THOUGHT);

  const handleDelete = async () => {
    const { data } = await deleteThought({
      variables: {
        thoughtId: props.thoughtId ?? props._id,
      },
    });
  }

  const handleFormSubmitAdd = async (event) => {
    event.preventDefault();

    const formData = {
      thoughtText,
      thoughtCountry,
      thoughtCity,
      thoughtLandmark,
      thoughtRating,
      thoughtAuthor: Auth.getProfile().data.username,
    }

    try {
      const { data } = await addThought({
        variables: formData,
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmitEdit = async (event) => {
    console.log('attempting to update review......')
    event.preventDefault();

    const formData = {
      thoughtId: props.thoughtId ?? props._id,
      thoughtText,
      thoughtCountry,
      thoughtCity,
      thoughtLandmark,
      thoughtRating,
      thoughtAuthor: Auth.getProfile().data.username,
    }

    try {
      const { data } = await updateThought({
        variables: formData,
      });

      console.log('updated review:', formData, data)

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };



  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };



  return (
    <div>
      <h3>{props.edit ? `Editing review: ${props.thoughtCity} ${props.thoughtCountry}` : `What amazing country/city would you like to review?`}</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            // onSubmit={function(e){ return props.edit ? handleFormSubmitEdit(e) : handleFormSubmitAdd(e) }}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="new review text..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtCountry"
                placeholder="country..."
                value={thoughtCountry}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={e => setThoughtCountry(e.target.value)}
              ></textarea>
            </div>


            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtCity"
                placeholder="city..."
                value={thoughtCity}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={e => setThoughtCity(e.target.value)}
              ></textarea>
            </div>



            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtLandmark"
                placeholder="landmark..."
                value={thoughtLandmark}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={e => setThoughtLandmark(e.target.value)}
              ></textarea>
            </div>



            {/* <div className="col-12 col-lg-9">
              <textarea
                name="thoughtRating"
                placeholder="rating..."
                value={thoughtRating}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={e => setThoughtRating(parseInt(e.target.value) ?? 0)}
              ></textarea>
            </div> */}

            <Rating value={thoughtRating} onChange={setThoughtRating}/>

            
            {props.edit 

              ? <>
                  <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" onClick={handleFormSubmitEdit}>
                      Update Review
                    </button>
                  </div>
                  <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" onClick={handleDelete}>
                     Delete Review
                    </button>
                  </div>
                </>

              : <>
                  <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" onClick={handleFormSubmitAdd}>
                      Add Review
                    </button>
                  </div>
                </>

              }
            

            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your travel reviews. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ThoughtForm;
