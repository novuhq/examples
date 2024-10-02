import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    creator: { type: String, required: true },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    done: { type: Boolean, default: false },
  },
  {
    collection: "note",
  }
);

export default mongoose.model("Notes", noteSchema);
