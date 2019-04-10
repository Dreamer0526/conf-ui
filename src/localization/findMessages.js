import squish from "object-squish";

import en from "./messages/en";
import zh from "./messages/zh";
import * as LOCALE from "../constants/localeTypes";


function findMessages(locale) {
  let sourceMessages;

  switch (locale) {
    case LOCALE.EN:
      sourceMessages = en;
      break

    case LOCALE.ZH:
    default:
      sourceMessages = zh;
  }

  return squish(sourceMessages);
}

export default findMessages;