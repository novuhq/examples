import express from "express";
import {
  createNote,
  deleteNote,
  updateNote,
  getNotes,
  sendEmailNotification,
  sendSmsNotification,
  deleteInAppNotification,
  toggleNoteDone,
} from "../controllers/note.js";
import auth from "../utils/auth.js";
import {
  addSubscriberToTopic,
  createSubscriber,
  getTopicByKey,
  getTopics,
  sendNotificationToTopic,
} from "../novu/novu.js";
const router = express.Router();

router.get("/", auth, getNotes);
router.post("/", auth, createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/:id", toggleNoteDone);

// for novu API
router.post("/send-sms", sendSmsNotification);
router.post("/send-email", sendEmailNotification);
router.post("/delete", auth, deleteInAppNotification);
router.post("/topics", getTopics);
router.get("/topics/:key", getTopicByKey);
router.post("/add-subscriber", addSubscriberToTopic);
router.post("/create-subscriber", createSubscriber);
router.post("/send-notification-topic", sendNotificationToTopic);

export default router;
