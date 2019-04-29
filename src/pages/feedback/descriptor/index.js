import * as COMPONENT from "../../../constants/componentTypes";


const titleField = (icon, dataId, textId) => ({
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


const feedbackTabs = {
  type: COMPONENT.TABS,
  width: 22,
  offset: 1,
  tabs: [{
    key: "userCases",
    title: titleField("cases", "userCases.msgCount", "feedback.userCases.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "cases"
    }]
  }, {
    key: "branches",
    title: titleField("bran", "branches.msgCount", "feedback.branches.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "branch"
    }]
  }, {
    key: "custGroups",
    title: titleField("users", "custGroups.msgCount", "feedback.custGroups.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "group"
    }]
  },
  ]
};

export default [feedbackTabs];