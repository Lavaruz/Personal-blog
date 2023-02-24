import Blog from "../../models/blog.model.js";

async function deleteBlog(req, res) {
  let { id } = req.params;
  await Blog.findOneAndDelete({
    id: id,
  }).then((result) => {
    res.json(result);
  });
}

export default deleteBlog;
