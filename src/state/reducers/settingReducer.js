import * as ACTION from "../../constants/actionTypes";
import * as LOCALE from "../../constants/localeTypes";
import findMessages from "../../localization/findMessages";


const originLocale = LOCALE.EN;

const origin = {
  theme: "default",
  locale: originLocale,
  messages: findMessages(originLocale)
};

const settingReducer = (state = origin, action) => {

  const { target = {}, type } = action;
  const { key } = target;

  switch (type) {
    case ACTION.CHANGE_LANGUAGE:
      const locale = key.split("_")[1]
      return {
        ...state,
        locale,
        messages: findMessages(locale)
      }

    case ACTION.CHANGE_THEME:
      return {
        ...state,
        theme: key
      }

    default:
      return state;
  }
}

export default settingReducer;
