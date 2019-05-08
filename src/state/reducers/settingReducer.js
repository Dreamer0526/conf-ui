import findScheme from "../../theme/findScheme";
import findMessages from "../../localization/findMessages";

import * as ACTION from "../../constants/actionTypes";
import * as LOCALE from "../../constants/localeTypes";


const originLocale = LOCALE.ZH;

const origin = {
  colors: findScheme(),
  locale: originLocale,
  messages: findMessages(originLocale)
};

const settingReducer = (state = origin, action) => {

  const { elemKey = "", type } = action;

  switch (type) {
    case ACTION.CHANGE_LANGUAGE:
      return {
        ...state,
        locale: elemKey,
        messages: findMessages(elemKey)
      }

    case ACTION.CHANGE_THEME:
      const colors = findScheme(elemKey, true);
      return {
        ...state,
        colors
      };

    default:
      return state;
  }
}

export default settingReducer;
