import { MENU } from "../constants/componentTypes";
import { TEST } from "../constants/actionTypes";

export const menuField = {
  type: MENU,
  mode: "vertical",
  structure: [{
    title: "Menu title",
    options: [
      {
        key: "key",
        label: "label",
        events: {
          onClick: TEST
        }
      }
    ]
  }]
};
