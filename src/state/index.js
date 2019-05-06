import { combineReducers } from "redux";

import setting from "./reducers/settingReducer";
import feedback from "./reducers/feedbackReducer";

export const reducers = combineReducers({
  feedback,
  setting,
});
