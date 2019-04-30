import { title, tabTitle } from "../../../fields/texts";

import * as COMPONENT from "../../../constants/componentTypes";


const feedbackTabs = {
  type: COMPONENT.TABS,
  tabs: [{
    key: "userCases",
    title: tabTitle("cases", "userCases.msgCount", "feedback.userCases.title"),
    children: [title("lalal")]
  }, {
    key: "branches",
    title: tabTitle("bran", "branches.msgCount", "feedback.branches.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "branch"
    }]
  }, {
    key: "custGroups",
    title: tabTitle("users", "custGroups.msgCount", "feedback.custGroups.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "group"
    }]
  },
  ]
};

export default [feedbackTabs];