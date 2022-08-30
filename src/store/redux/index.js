import { combineReducers } from "redux";
import dataReducer from "./reducers/dataReducer";

const rootReducers = combineReducers({ userDataReducer: dataReducer });

export default rootReducers;
