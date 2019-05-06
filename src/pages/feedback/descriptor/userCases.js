import React from "react";
import UserCaseBarChart from "../UserCaseBarChart";

import { title } from "../../../fields/texts";
import { insightCard } from "../../../fields/cards";

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

const barChartOption = {
  color: ['#00C9FE', '#0082F0'],
  textStyle: {
    color: "grey"
  },
  legend: {
    data: ['Forest', 'Steppe'],
    left: 0
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: 'shadow'
    },
    formatter: () => ""
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "grey"
        }
      },
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'y1',
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "grey"
        }
      }
    },
    {
      type: 'value',
      name: 'y2',
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "grey"
        }
      }
    }
  ],
  series: [
    {
      name: 'Forest',
      type: 'bar',
      barGap: 0.2,
      yAxisIndex: 0,
      data: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],

    },
    {
      name: 'Steppe',
      type: 'bar',
      yAxisIndex: 1,
      data: [25, 50, 75, 100, 125, 150, 200, 224, 250, 275]
    }
  ]
};

const chartField = {
  type: COMPONENT.COMPONENT,
  component: <UserCaseBarChart option={barChartOption} />
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