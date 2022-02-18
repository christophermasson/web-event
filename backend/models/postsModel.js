const mongoose = require("mongoose");

const PostModel = mongoose.model(
  "evenements-publics-cibul",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);

module.exports = { PostModel };
