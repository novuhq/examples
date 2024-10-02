import { combineReducers } from "redux";
import authReducer from "./auth";
import noteReducer from "./notes";

export default combineReducers({
    auth:authReducer,
    notes:noteReducer,
});
