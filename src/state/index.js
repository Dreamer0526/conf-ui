import { combineReducers } from "redux";

import poc from "./reducers/pocReducer";
import setting from "./reducers/settingReducer";

export const reducers = combineReducers({
  setting,
  poc
});
