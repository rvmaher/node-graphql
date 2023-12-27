const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  mongoose.connection.on("connected", () => {
    console.log("connected");
  });
  await mongoose.connect(
    "mongodb+srv://rvmaher1999:admin123@cluster0.ct0y2tf.mongodb.net/graphql"
  );
  app.listen(3000, () => {
    console.log("Server started");
  });
};

startServer();
