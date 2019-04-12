import * as THEME from "../../../constants/themeTypes";
import * as ACTION from "../../../constants/actionTypes";
import * as LOCALE from "../../../constants/localeTypes";
import * as COMPONENT from "../../../constants/componentTypes";

export const dropdown_language = {
  type: COMPONENT.DROPDOWN,
  width: 3,
  title: "LANGUAGE",
  defaultSelectedKey: LOCALE.ZH,
  events: {
    onClick: ACTION.CHANGE_LANGUAGE
  },
  options: [
    {
      textId: "English",
      key: LOCALE.EN,
    }, {
      textId: "中文",
      key: LOCALE.ZH,
    }
  ]
};


export const dropdowm_theme = {
  type: COMPONENT.DROPDOWN,
  width: 3,
  offset: 4,
  defaultSelectedKey: THEME.BLUE,
  events: {
    onClick: ACTION.CHANGE_THEME
  },
  options: [
    {
      key: THEME.BLUE,
      textId: THEME.BLUE
    },
    {
      key: THEME.RED,
      textId: THEME.RED
    }
  ]
}