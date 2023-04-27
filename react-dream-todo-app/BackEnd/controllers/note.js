import notes from "../models/note.js";
import mongoose from "mongoose";
import {
  getNotification,
  inAppNotification,
  smsNotification,
} from "../novu/novu.js";

export const getNotes = async (req, res) => {
  try {
    const allNotes = await notes.find();
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const createNote = async (req, res) => {
  const { title, description, date, message } = req.body;
  const newNote = new notes({
    title,
    description,
    date,
    creator: req.userId,
    createdAt: new Date().toISOString(),
    checked: false,
  });
  try {
    await newNote.save();
    await inAppNotification(title, description, req.userId, message);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`no note is available with id:${id}`);
  await notes.findByIdAndRemove(id);
  res.json({ message: "Note deleted successfully" });
};

export const updateNote = async (req, res) => {
  const { id: _id } = req.params;
  const note = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No note is available with id:${id}`);
  const updatedNote = await notes.findByIdAndUpdate(
    _id,
    { ...note, _id },
    { new: true }
  );
  res.json(updatedNote);
};

export const sendSmsNotification = async (req, res) => {
  try {
    const { title, description, phone, noteId } = req.body;
    await smsNotification(title, description, phone, noteId);
    res.status(200).json({ message: "SMS sent successfully" });
  } catch (error) {
    console.log("sendSmsNotification error", error);
    res.status(500).json({ message: "Failed to send SMS" });
  }
};

export const sendEmailNotification = async (req, res) => {
  try {
    const { title, description, email, noteId } = req.body;
    await getNotification(title, description, email, noteId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log("sendEmailNotification error", error);
    res.status(500).json({ message: "Failed to send Email" });
  }
};

export const deleteInAppNotification = async (req, res) => {
  try {
    const { title, description, userId, message } = req.body;
    await inAppNotification(title, description, userId, message);
    res.status(200).json({ message: "Todo delted successfully" });
  } catch (error) {
    console.log("deleteInAppNotification error", error);
    res.status(500).json({ message: "Todo deleted successfully" });
  }
};

export const toggleNoteDone = async (req, res) => {
  try {
    const noteRef = await notes.findById(req.params.id);

    const note = await notes.findOneAndUpdate(
      { _id: req.params.id },
      { done: !noteRef.done }
    );

    await note.save();

    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
