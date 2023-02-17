const mongoose  = require( "mongoose");

const postModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    fruit: {
        type:String,
        default: "Pears"
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postModel);
module.exports = Post;
