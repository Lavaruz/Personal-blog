import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

// Connect DB
import connectMongoose from "../services/mongoConnect.js";

// ROUTER
import blogRouter from "./routers/blog.route.js";

class App {
  app;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  async plugins() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(morgan("dev"));
    await connectMongoose();
  }

  routes() {
    this.app.use("/api/v1/blog", blogRouter);
  }
}

const app = new App().app;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server runing at port ${PORT}`));
