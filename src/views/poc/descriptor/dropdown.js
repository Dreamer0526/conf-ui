import * as ACTION from "../../../constants/actionTypes";
import * as COMPONENT from "../../../constants/componentTypes";

export const dropdown_language = {
  type: COMPONENT.DROPDOWN,
  width: 3,
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


export const dropdowm_theme = {
  type: COMPONENT.DROPDOWN,
  width: 3,
  offset: 4,
  defaultSelectedKey: "default",
  events: {
    onClick: ACTION.CHANGE_THEME
  },
  options: [
    {
      key: "default",
      textId: "default"
    },
    {
      key: "red",
      textId: "red"
    }
  ]
}