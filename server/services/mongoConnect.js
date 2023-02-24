import mongoose from "mongoose";

async function connectMongoose() {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect("mongodb://localhost:27017/blog")
    .then(() => console.log("connect to db"));
}

export default connectMongoose;
