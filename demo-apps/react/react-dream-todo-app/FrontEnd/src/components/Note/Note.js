import React, { useState, useEffect } from "react";
import "./note.css";
import { useDispatch } from "react-redux";
import {
  deleteNote,
  deleteTodoInApp,
  sendEmailNotification,
  sendSmsNotification,
  toggleTodo,
} from "../../actions/notes";
import { MdOutlineEmail } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdSms } from "react-icons/md";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import toast from "react-hot-toast";

const Note = ({
  item,
  setCurrentId,
  setShowForm,
  setIsEditing,
  setSelectedDate,
  theme,
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isSms, setIsSms] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const donehandler = async (event) => {
    dispatch(toggleTodo(item._id));
  };

  const deleteTodoHandler = async () => {
    const deleteInAppNote = {
      title: item.title,
      description: item.description,
      userId: user?.result?._id,
      message: "deleted",
    };
    try {
      dispatch(deleteTodoInApp(deleteInAppNote));
      dispatch(deleteNote(item._id));
      toast.error("Todo deleted!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log("deleteTodoHandler error", error);
    }
  };

  const smsHandler = () => {
    setIsSms((prev) => !prev);
  };

  const emailHandler = () => {
    setIsEmail((prev) => !prev);
  };

  const descriptionHandler = () => {
    setShowDescription((prev) => !prev);
  };

  const editTodoHandler = () => {
    setCurrentId(item._id);
    setSelectedDate(new Date(item.date));
    setShowForm(true);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("email is required to send notification", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    const emailNote = {
      title: item.title,
      description: item.description,
      email: email,
      noteId: item._id,
    };
    try {
      dispatch(sendEmailNotification(emailNote));
    } catch (error) {
      console.log("handleSubmitEmail error", error);
    }
    setEmail("");
  };

  const handleSubmitPhone = async (e) => {
    e.preventDefault();
    if (!phone) {
      return toast.error("Phone number is required", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (phone.length < 10) {
      return toast.error("Enter correct phone number", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    const smsNote = {
      title: item.title,
      description: item.description,
      phone: phone,
      noteId: item._id,
    };
    try {
      dispatch(sendSmsNotification(smsNote));
    } catch (error) {
      console.log("handleSubmitPhone error", error);
    }
    setPhone("");
  };

  return (
    <div
      className="note"
      style={{
        backgroundColor: theme ? "#1f1f2b" : "#f2f2f2",
      }}
    >
      <div className="note_container">
        <div className="note_text_container">
          <input
            type="checkbox"
            className="note_checkbox"
            checked={item.done}
            onChange={donehandler}
            style={{
              cursor: "pointer",
            }}
          />
          <h2 className={item.done ? "note_title done" : "note_title"}>
            {item.title}
          </h2>
        </div>
        <div className="note_button_container">
          {item.description.length > 0 && (
            <div
              className="icon_container note_description"
              onClick={descriptionHandler}
            >
              <BsReverseLayoutTextWindowReverse />
            </div>
          )}
          <div className="icon_container note_email" onClick={emailHandler}>
            <MdOutlineEmail />
          </div>
          <div className="icon_container note_sms" onClick={smsHandler}>
            <MdSms />
          </div>
          <div className="icon_container note_update" onClick={editTodoHandler}>
            <FiEdit />
          </div>
          <div
            className="icon_container note_delete"
            onClick={deleteTodoHandler}
          >
            <BsTrash3Fill />
          </div>
        </div>
      </div>
      <div className="note_input_container">
        {showDescription && (
          <p
            className={item.done ? "note_description done" : "note_description"}
          >
            {item.description}
          </p>
        )}
        {isEmail && (
          <form className="note_form_container" onSubmit={handleSubmitEmail}>
            <input
              className="input_box"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Assignee email"
            />
            <button className="note_form_button">send Email</button>
          </form>
        )}
        {isSms && (
          <form className="note_form_container" onSubmit={handleSubmitPhone}>
            <input
              className="input_box"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter Number"
            />
            <button className="note_form_button">Send sms</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Note;
