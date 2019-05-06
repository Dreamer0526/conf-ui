import React from "react";
import { Link } from "react-router-dom";
import * as ACTION from "./constants/actionTypes";
import * as COMPONENT from "./constants/componentTypes";

const logoSrc = require("./static/images/logo.png");

const logoField = {
  type: COMPONENT.LAYOUT,
  cssFor: "text-center base-margin-top dbl-margin-bottom",
  children: [{
    type: COMPONENT.IMAGE,
    width: "20px",
    src: logoSrc
  }]
};

const menuField = {
  type: COMPONENT.MENU,
  options: [
    {
      key: "feed",
      label: <Link to="/feedback"><span className="icon-2x exec" /></Link>,
    }, {
      key: "lead",
      label: <Link to="/test"><span className="icon-2x succ" /></Link>,
    }
  ]
};

export const menu = [logoField, menuField];

export const header = [{
  type: COMPONENT.LAYOUT,
  children: [{
    type: COMPONENT.LAYOUT,
    width: 12,
    children: [{
      type: COMPONENT.TEXT,
      cssFor: "font-18",
      textId: "feedback.header"
    }]
  }, {
    type: COMPONENT.DROPDOWN,
    width: 3,
    offset: 9,
    cssFor: "text-right",
    textId: "feedback.userName",
    events: {
      onClick: ACTION.CHANGE_LANGUAGE
    },
    options: [
      {
        textId: "中文",
        key: "zh",
        selected: true
      }, {
        textId: "English",
        key: "en",
      }
    ]
  }]
}];