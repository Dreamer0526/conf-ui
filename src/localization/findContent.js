import squish from "object-squish";

import en from "./contents/en";
import zh from "./contents/zh";
import * as LOCALE from "../constants/localeTypes";


function findContent(locale) {
  let sourceContent;

  switch (locale) {
    case LOCALE.EN:
      sourceContent = en;
      break

    case LOCALE.ZH:
    default:
      sourceContent = zh;
  }

  return squish(sourceContent);
}

export default findContent;