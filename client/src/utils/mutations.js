import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtCountry: String!, $thoughtCity: String!, $thoughtLandmark: String!, $thoughtRating: Int!) {
    addThought(thoughtText: $thoughtText, thoughtCountry: $thoughtCountry, thoughtCity: $thoughtCity, thoughtLandmark: $thoughtLandmark, thoughtRating: $thoughtRating) {
      _id
      thoughtText
      thoughtAuthor
      thoughtCountry
      thoughtCity
      thoughtLandmark
      thoughtRating
      createdAt
     
    }
  }
`;
