const mongoose  = require( "mongoose");

const postModel = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postModel);
module.export = Post;
