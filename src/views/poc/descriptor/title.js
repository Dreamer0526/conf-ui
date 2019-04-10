import * as COMPONENT from "../../../constants/componentTypes";


export const title = (textId) => ({
  type: COMPONENT.LAYOUT,
  cssFor: "poc-title",
  width: 24,
  children: [
    {
      type: COMPONENT.TEXT,
      cssFor: "font-18 base-margin-left",
      textId
    }
  ]
});