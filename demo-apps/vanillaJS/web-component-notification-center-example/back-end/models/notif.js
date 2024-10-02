import mongoose from "mongoose";

const notifSchema = mongoose.Schema(
  {
    description: { type: String, required: true }
  },
  {
    collection: "notif",
  }
);

export default mongoose.model("Notif", notifSchema);