import * as COMPONENT from "../constants/componentTypes";


export const title = (textId, descField = {}) => ({
  type: COMPONENT.LAYOUT,
  cssFor: "text-title",
  width: 24,
  children: [
    {
      type: COMPONENT.TEXT,
      cssFor: "font-18 base-margin",
      textId
    },
    descField
  ]
});


/**
 * @param {String} icon icon name
 * @param {OneOf[String, Object]} badge dataId of counting number or RendererIcon component
 * @param {String} textId textId of text to show
 */
export const tabTitle = (icon, badge, textId) => ({
  type: COMPONENT.LAYOUT,
  children: [{
    type: COMPONENT.ICON,
    icon,
    size: 3,
    badge
  }, {
    type: COMPONENT.TEXT,
    cssFor: "half-margin-left",
    textId
  }]
});
