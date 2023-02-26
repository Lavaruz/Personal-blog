import Blog from "../../models/blog.model.js";

async function addBlog(req, res) {
  // TITLE | BODY | TAGS
  let data = req.body;
  await Blog.countDocuments().then(async (count) => {
    Object.assign(data, {
      id: count + 1,
      data,
      createdDate: new Date().toDateString(),
    });
    await Blog.create(data).then((result) => {
      res.json(result);
    });
  });
}

export default addBlog;
