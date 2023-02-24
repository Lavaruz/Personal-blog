import { Router } from "express";
const blogRouter = Router();

// CONTROLLER
import getAllBlogs from "../controllers/blogs/getAllBlogs.js";
import addBlog from "../controllers/blogs/addBlog.js";
import deleteBlog from "../controllers/blogs/deleteBlog.js";

blogRouter.get("/", getAllBlogs);
blogRouter.post("/", addBlog);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
