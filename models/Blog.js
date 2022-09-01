const mongoose = require("mongoose");
const mongooseAsyncHooks = require("@mongoosejs/async-hooks");
const collection = "blog";

const Blog = new mongoose.Schema(
  {
    content: String,
    createdBy: { type: mongoose.Schema.ObjectId },
    tittle: { type: String, required: true, index: true },
    users: [mongoose.Schema.ObjectId],
    createdDate: { type: Date, default: Date.now },
    events: [
      {
        userId: mongoose.Schema.ObjectId,
        timestamp: { type: Date, default: Date.now },
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const model = mongoose.model("Blog", Blog, collection);

Blog.plugin(mongooseAsyncHooks);

module.exports = model;
