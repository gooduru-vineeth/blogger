const blogRepo = require("../repositories/blog");

module.exports.handleBlog = async ({ content, title, userId, blogId }) => {
  let blog, result;
  if (blogId) { // if blogId present means we need to update the existing blog
    blog = await blogRepo.findById(blogId);
    result = blogRepo.updateOne(blog._id, blog.content + content, userId);
    return { blogId: blog._id };
  } else {
    // creating a new blog
    result = await blogRepo.create(title, userId, content);
    return { blogId: res._id };
  }
};
