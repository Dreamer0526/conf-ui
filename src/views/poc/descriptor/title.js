import * as COMPONENT from "../../../metadata/componentTypes";


export const title = (text) => ({
  type: COMPONENT.LAYOUT,
  cssFor: "poc-title",
  width: 24,
  children: [
    {
      type: COMPONENT.TEXT,
      cssFor: "font-18 base-margin-left",
      text
    }
  ]
});