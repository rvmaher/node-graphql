const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    desc: String
  }

  type Query {
    getAllPosts: [Post]
    getPost(id: ID): Post
  }

  input PostInput {
    title: String
    desc: String
  }

  type Mutation {
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
  }
`;

module.exports = typeDefs;
