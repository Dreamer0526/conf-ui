import * as COMPONENT from "../../../constants/componentTypes";
import { tabTitle } from "../../../fields/texts";
import useCasesDesc from "./useCases";


const feedbackTabs = {
  type: COMPONENT.TABS,
  tabs: [{
    key: "useCases",
    title: tabTitle("cases", "feedback.useCases.msgCount", "feedback.useCases.title"),
    children: useCasesDesc
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