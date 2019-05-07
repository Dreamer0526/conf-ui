import React from "react";
import UseCasesChart from "../UseCasesChart";

import { title } from "../../../fields/texts";
import { insightCard } from "../../../fields/cards";

import * as ACTION from "../../../constants/actionTypes";
import * as COMPONENT from "../../../constants/componentTypes";


const dateField = { type: COMPONENT.TEXT, textId: "2019/03/04 - 2019/03/10" };

const radioField = {
  type: COMPONENT.BUTTON_RADIO,
  width: 8,
  cssFor: "text-right half-margin-top z-index-1",
  events: {
    onChange: ACTION.SWITCH_USE_CASE_CHART
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
  component: <UseCasesChart />
};


const buttonField = {
  type: COMPONENT.LAYOUT,
  width: 8,
  cssFor: "text-right base-margin-top",
  children: [{
    type: COMPONENT.BUTTON,
    events: {
      onClick: "add insight"
    },
    styleType: "primary",
    textId: "buttonLabels.new"
  }]

}

const useCasesDescriptor = [
  { ...title("feedback.useCases.chartTitle", dateField), width: 16 },
  radioField,

  chartField,

  { ...title("feedback.useCases.insightTitle", dateField), width: 16 },
  buttonField,

  {
    cssFor: "half-margin-top",
    children: [
      insightCard,
      insightCard,
      insightCard
    ]
  }
];

export default useCasesDescriptor;