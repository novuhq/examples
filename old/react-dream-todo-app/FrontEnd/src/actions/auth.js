import * as api from "../common/api";
import toast from "react-hot-toast";

export const signin = (formValue, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formValue);
    dispatch({ type: "AUTH", payload: data });
    navigate("/home");
    toast.success("loggedin successfully!!");
  } catch (error) {
    console.log("signin error", error);
    toast.error(error.response.data.message);
  }
};

export const signup = (formvalue, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUP(formvalue);
    dispatch({ type: "AUTH", payload: data });
    navigate("/home");
    toast.success("user created successfully");
  } catch (error) {
    console.log("signup error", error);
    toast.error(error.response.data.message);
  }
};
