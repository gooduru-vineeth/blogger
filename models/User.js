const mongoose = require("mongoose");
const mongooseAsyncHooks = require("@mongoosejs/async-hooks");
const collection = "user";

const User = new mongoose.Schema(
  {
    userName: String,
    userId: { type: String, required: true, index: true, unique: true },
    email: String,
    phoneNo: String,
    password: String,
  },
  { timestamps: true }
);

const model = mongoose.model("User", User, collection);

User.plugin(mongooseAsyncHooks);

module.exports = model;
