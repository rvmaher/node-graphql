const Post = require("./models/post.model");

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
    getPost: async (_, { id }) => {
      return await Post.findById(id);
    },
  },

  Mutation: {
    createPost: async (_, args) => {
      const { title, desc } = args.post;
      const post = new Post({ desc, title });
      await post.save();
      return post;
    },
    deletePost: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return "OK";
    },
    updatePost: async (_, args) => {
      const { id, post } = args;
      return await Post.findByIdAndUpdate(id, post, {
        new: true,
      });
    },
  },
};

module.exports = resolvers;
