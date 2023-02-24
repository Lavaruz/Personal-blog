import mongoose from "mongoose";

let blogSchema = mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Blog", blogSchema);
