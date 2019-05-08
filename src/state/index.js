import { combineReducers } from "redux";

import setting from "./reducers/settingReducer";

import feedback from "../pages/feedback/state/feedbackReducer";

export const reducers = combineReducers({
  feedback,
  setting,
});
