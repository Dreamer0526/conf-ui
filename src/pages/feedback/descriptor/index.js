import * as COMPONENT from "../../../constants/componentTypes";
import { tabTitle } from "../../../fields/texts";
import userCasesDesc from "./userCases";


const feedbackTabs = {
  type: COMPONENT.TABS,
  tabs: [{
    key: "userCases",
    title: tabTitle("cases", "feedback.userCases.msgCount", "feedback.userCases.title"),
    children: userCasesDesc
  }, {
    key: "branches",
    title: tabTitle("bran", "feedback.branches.msgCount", "feedback.branches.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "branch"
    }]
  }, {
    key: "custGroups",
    title: tabTitle("users", "feedback.custGroups.msgCount", "feedback.custGroups.title"),
    children: [{
      type: COMPONENT.TEXT,
      textId: "group"
    }]
  }]
};

export default [feedbackTabs];