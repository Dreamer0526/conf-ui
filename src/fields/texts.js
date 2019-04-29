import * as COMPONENT from "../constants/componentTypes";


export const title = (textId) => ({
  type: COMPONENT.LAYOUT,
  cssFor: "text-title",
  width: 24,
  children: [
    {
      type: COMPONENT.TEXT,
      cssFor: "font-18 base-margin-left",
      textId
    }
  ]
});


export const tabTitle = (icon, dataId, textId) => ({
  type: COMPONENT.LAYOUT,
  children: [{
    type: COMPONENT.ICON,
    icon,
    size: 3,
    badge: {
      dataId
    }
  }, {
    type: COMPONENT.TEXT,
    cssFor: "half-margin-left",
    textId
  }]
});
