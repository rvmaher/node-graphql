const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
