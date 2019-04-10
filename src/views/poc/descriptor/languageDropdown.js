import * as ACTION from "../../../constants/actionTypes";
import * as COMPONENT from "../../../constants/componentTypes";

export const dropdown_language = {
  type: COMPONENT.DROPDOWN,
  width: 5,
  offset: 7,
  title: "LANGUAGE",
  defaultSelectedKey: "lang_en",
  events: {
    onClick: ACTION.CHANGE_LANGUAGE
  },
  options: [
    {
      textId: "English",
      key: "lang_en",
    }, {
      textId: "中文",
      key: "lang_zh",
    }
  ]
};