import { MENU } from "../metadata/componentTypes";
import { TEST } from "../metadata/actionTypes";

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
