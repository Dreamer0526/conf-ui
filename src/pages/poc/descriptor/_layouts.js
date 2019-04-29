import * as COMPONENT from "../../../constants/componentTypes";


export const card = ({ header, body, footer }) => ({
  type: COMPONENT.LAYOUT,
  cssFor: "poc-card",
  width: 5,
  offset: 1,
  children: [
    {
      width: 24,
      children: header,
      cssFor: "card-header"
    }, {
      width: 24,
      children: body,
      cssFor: "card-body"
    }, {
      width: 24,
      children: footer,
      cssFor: "card-footer"
    }
  ]
});


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