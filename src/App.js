import React from "react";
import PageRenderer from "./components/page-renderer/PageRenderer";

import * as COMPONENT_TYPE from "./metadata/componentTypes";


const text = {
  type: COMPONENT_TYPE.TEXT,
  width: 22,
  text: "下发线索汇总"
};

const button = {
  type: COMPONENT_TYPE.BUTTON,
  label: "Click",
  width: 12,
  offset: 6
}

const icon = {
  type: COMPONENT_TYPE.ICON,
  width: 2,
  text: "arch"
}

// const descriptor = [text, button, icon]

const descriptor = [{
  type: COMPONENT_TYPE.CARD,
  width: 12,
  offset: 6,
  children: [
    icon, text, button
  ]
}];

const App = () => {
  return (
    <PageRenderer descriptor={descriptor} />
  );
};

export default App;
