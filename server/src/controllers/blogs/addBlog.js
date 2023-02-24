import Blog from "../../models/blog.model.js";

async function addBlog(req, res) {
  let data = req.body;
  await Blog.countDocuments().then(async (count) => {
    Object.assign(data, {
      data,
      id: count + 1,
    });
    await Blog.create(data).then((result) => {
      res.json(result);
    });
  });
}

export default addBlog;
