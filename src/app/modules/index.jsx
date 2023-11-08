import { combineReducers } from "redux";
import loginState from "./loginState";
console.log(loginState)

export default combineReducers({ login: loginState.reducer });
