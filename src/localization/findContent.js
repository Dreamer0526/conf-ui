import * as LOCALE from "../constants/localeTypes";

import en from "./contents/en";
import zh from "./contents/zh";


function findContent(locale) {
  switch (locale) {
    case LOCALE.EN:
      return en;

    case LOCALE.ZH:
    default:
      return zh;
  }
}

export default findContent;