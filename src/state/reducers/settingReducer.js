import * as ACTION from "../../constants/actionTypes";
import * as LOCALE from "../../constants/localeTypes";
import findMessages from "../../localization/findMessages";


const originLocale = LOCALE.EN;

const origin = {
  locale: originLocale,
  messages: findMessages(originLocale)
};

const settingReducer = (state = origin, action) => {
  switch (action.type) {
    case ACTION.CHANGE_LANGUAGE:
      const { target } = action;
      const { key } = target;
      const locale = key.split("_")[1]
      return {
        ...state,
        locale,
        messages: findMessages(locale)
      }

    default:
      return state;
  }
}

export default settingReducer;
