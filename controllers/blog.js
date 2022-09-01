const blogService = require("../services/blog");

module.exports.handleBlog = async (req, res) => {
  const { tittle, content, userId, blogId } = req.body;
  if (!userId)
    return res.status(401).json({ success: false, message: "Invalid User" });
  if (!tittle)
    return res
      .status(400)
      .json({ success: false, message: "tittle  is required" });
  if (!content || !blogId)
    return res
      .status(400)
      .json({ success: false, message: "blogId and content is required" });
  try {
    const result = await blogService.handleBlog(req.body);
    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.err(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};
