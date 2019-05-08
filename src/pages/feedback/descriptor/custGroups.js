import React from "react";
import CustGroupsChart from "../CustGroupsChart";

import { title } from "../../../fields/texts";

import * as ACTION from "../../../constants/actionTypes";
import * as COMPONENT from "../../../constants/componentTypes";


const dateField = { type: COMPONENT.TEXT, textId: "2019/03/04 - 2019/03/10" };

const radioField = {
  type: COMPONENT.BUTTON_RADIO,
  width: 8,
  cssFor: "text-right half-margin-top z-index-1",
  events: {
    onChange: ACTION.TEST
  },
  defaultSelectedKey: "averageValue",
  options: [{
    key: "averageValue",
    textId: "buttonLabels.averageValue"
  }, {
    key: "totalValue",
    textId: "buttonLabels.totalValue"
  }, {
    key: "conversionRate",
    textId: "buttonLabels.conversionRate"
  }]
};

const chartField = {
  type: COMPONENT.COMPONENT,
  component: <CustGroupsChart />
};


const useCasesDescriptor = [
  { ...title("feedback.custGroups.chartTitle", dateField), width: 16 },
  radioField,
  chartField,
];

export default useCasesDescriptor;