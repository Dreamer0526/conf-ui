import { DROPDOWN } from "../../constants/componentTypes";
import { TEST } from "../constants/actionTypes";

export const dropdown_language = {
  type: DROPDOWN,
  width: 3,
  title: "Default title",
  defaultSelectedKey: "key1",
  events: {
    onClick: TEST
  },
  options: [
    {
      textId: "option1",
      key: "key1",
      selected: true
    }, {
      textId: "option2",
      key: "key2",
    }
  ]
};