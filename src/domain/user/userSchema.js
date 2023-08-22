// import gql from 'graphql-tag';

export const userSchema = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
  type Mutation {
    registerUser(username: String!, password: String!): String
    loginUser(username: String, password: String): String
  }
   
`;