const Blog = require("../models/Blog");

exports.findById = (_id) => Blog.findOne(_id);
exports.updateOne = (blogId, content, userId) => {
  return Blog.updateOne(blogId, {
    $set: { content },
    $push: { events: { text: content, userId } },
  });
};
exports.create = (title, userId, content) => {
  let createQuery = { title, createdBy: userId };
  if (content) {
    createQuery.events = [{ text: content, userId }];
    createQuery.content = content;
  }
  return Blog.create(createQuery);
};
