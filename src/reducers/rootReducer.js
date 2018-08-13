import React from "react";
import eventReducer from "./eventReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	events: eventReducer
});

export default rootReducer;