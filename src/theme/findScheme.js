import * as THEME from "../constants/themeTypes";

import red from "./color-schemes/red";
import blue from "./color-schemes/blue";


function setTheme(scheme) {
  const appElement = document.getElementById("app");

  for (let [key, value] of Object.entries(scheme)) {
    appElement.style.setProperty(key, value);
  }
}


function findScheme(theme = THEME.BLUE, set = false) {
  let scheme;

  switch (theme) {
    case THEME.RED:
      scheme = red;
      break;

    case THEME.BLUE:
    default:
      scheme = blue;
  }

  if (set) setTheme(scheme);

  return scheme;
}

export default findScheme;