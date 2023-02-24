import Blog from "../../models/blog.model.js";

async function updateBlog(req, res) {
  let { id } = req.params;
  let data = req.body;
  await Blog.findOneAndUpdate(
    {
      id: id,
    },
    {
      title: data.title,
      body: data.body,
    },
    {
      new: true,
    }
  ).then((result) => {
    res.json({
      status: "data updated",
      data: result,
    });
  });
}

export default updateBlog;
