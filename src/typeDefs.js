import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    tasks: [Task!]!
    askAI(prompt: String!): AIResponse!
  }

  type AIResponse {
    response: String
  }

  type Task {
    id: ID!
    name: String!
  }

  type Mutation {
    createTask(name: String!): Task!
    deleteTask(id: ID!): Task!
  }
`;

export default typeDefs;
