import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_THOUGHT } from '../utils/queries';
import ThoughtForm from '../components/ThoughtForm';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        
        <span style={{ fontSize: '1rem' }}>
        {thought.thoughtAuthor}  created this review on {thought.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">  
      {/* alexis 2/2/23 I may have accidentally messed up the line below attribute="value"  */}
        <ThoughtForm {...thought} attribute="value" />
      </div>

    </div>
  );
};

export default SingleThought;
