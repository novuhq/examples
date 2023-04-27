import * as api from "../common/api";
import { toast } from "react-toastify";

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("getNotes error", error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({ type: "CREATE", payload: data });
    toast.success("note added!!");
  } catch (error) {
    console.log("createNote error", error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    dispatch({ type: "UPDATE", payload: data });
    toast.success("note updated!!");
  } catch (error) {
    console.log("updatedNote error", error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);
    dispatch({ type: "DELETE", payload: id });
    toast.warning("note deleted!!");
  } catch (error) {
    console.log("deleteNote error", error);
  }
};

export const sendSmsNotification = (note) => async (dispatch) => {
  try {
    const response = await api.sendSms(note);
    console.log("sms notification", response);
  } catch (error) {
    console.log("sendSms error", error);
    toast.error(error.response.data.message);
  }
};

export const sendEmailNotification = (note) => async (dispatch) => {
  try {
    const response = await api.sendEmail(note);
    console.log("email notification", response);
  } catch (error) {
    console.log("sendEmail error", error);
    toast.error(error.response.data.message);
  }
};

export const deleteTodoInApp = (note) => async (dispatch) => {
  try {
    const response = await api.deleteInApp(note);
    console.log("deleteInApp response", response);
  } catch (error) {
    console.log("deleteTodoInApp error", error);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await api.updateNoteChecked(id);

    dispatch({ type: "TOGGLE_DONE", payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};
