import React from "react";
import UserCaseBarChart from "../UserCaseBarChart";

import { title } from "../../../fields/texts";
import { insightCard } from "../../../fields/cards";
import getOption from "../metadata/barChartOption";

import * as COMPONENT from "../../../constants/componentTypes";

const dateField = { type: COMPONENT.TEXT, textId: "2019/03/04 - 2019/03/10" };

const radioField = {
  type: COMPONENT.BUTTON_RADIO,
  width: 24,
  cssFor: "text-right",
  events: {
    onChange: "button radio action"
  },
  defaultSelectedKey: "leadValue",
  options: [{
    key: "leadValue",
    textId: "buttonLabels.leadValue"
  }, {
    key: "execConversion",
    textId: "buttonLabels.execConversion"
  }]
};

const chartField = {
  type: COMPONENT.COMPONENT,
  component: <UserCaseBarChart option={getOption()} />
};


const buttonField = {
  type: COMPONENT.LAYOUT,
  cssFor: "text-right",
  children: [{
    type: COMPONENT.BUTTON,
    events: {
      onClick: "add insight"
    },
    styleType: "primary",
    textId: "buttonLabels.new"
  }]

}

const userCasesDescriptor = [
  title("feedback.userCases.chartTitle", dateField),
  radioField,
  chartField,

  title("feedback.userCases.insightTitle", dateField),
  buttonField,

  insightCard,
  insightCard,
  insightCard
];

export default userCasesDescriptor;