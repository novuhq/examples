import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/auth";
import Loader from "../../components/Loader/Loader";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isText, setIsText] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const showHandler = () => {
    setIsText((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(signup(formValue, navigate)).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="auth_container">
      <div className="auth_header">
        <h2>moonShine</h2>
      </div>
      <form onSubmit={handleFormSubmit} className="auth_form">
        <div className="auth_sub_container">
          <label for="firstname">FirstName</label>
          <label for="lastname">LastName</label>
        </div>
        <div className="auth_sub_container">
          <input
            type="text"
            className="auth_input"
            id="firstname"
            value={formValue.first_name}
            name="first_name"
            onChange={handleChange}
            placeholder="Firstname"
          />
          <input
            type="text"
            className="auth_input"
            id="lastname"
            value={formValue.last_name}
            name="last_name"
            onChange={handleChange}
            placeholder="Lastname"
          />
        </div>
        <label for="email">Email</label>
        <input
          type="text"
          className="auth_input"
          id="email"
          value={formValue.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <label for="password">Password</label>
        <input
          type={isText ? "text" : "password"}
          className="auth_input"
          id="password"
          value={formValue.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
        {isLoading ? null : (
          <div className="auth_icon_signup" onClick={showHandler}>
            {isText ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        )}
        <label for="confirmpassword">ConfirmPassword</label>
        <input
          type="text"
          className="auth_input"
          id="confirmpassword"
          value={formValue.confirm_password}
          name="confirm_password"
          onChange={handleChange}
          placeholder="Re-Enter you password"
        />
        <div className="auth_button_container">
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className="auth_button"
              disabled={!(formValue.email && formValue.password)}
            >
              Signup
            </button>
          )}
        </div>
        <Link to="/">
          <p>Already have an account? Login here</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
