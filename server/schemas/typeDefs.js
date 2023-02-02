const { gql } = require('apollo-server-express');

// I Think  graphql uses this typedefinition file to configure the graphql explorer in the browser and type check mutations/queries

const typeDefs = gql`
type User {
  _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    thoughtCountry: String
    thoughtCity: String
    thoughtLandmark: String
    thoughtRating: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, thoughtCountry: String!, thoughtCity: String!, thoughtLandmark: String!, thoughtRating: Int!): Thought
    removeThought(thoughtId: ID!): Thought
  }
`;

module.exports = typeDefs;
