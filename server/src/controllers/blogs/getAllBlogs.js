import Blog from "../../models/blog.model.js";

async function getAllBlogs(req, res) {
  await Blog.find().then((result) => {
    res.json(result);
  });
}

export default getAllBlogs;
