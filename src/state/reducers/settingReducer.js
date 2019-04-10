import * as LOCALE from "../../constants/localeTypes";
import findMessages from "../../localization/findMessages";


const originLocale = LOCALE.EN;

const origin = {
  locale: originLocale,
  messages: findMessages(originLocale)
};

const settingReducer = (state = origin, action) => {
  return state;
}

export default settingReducer;
