import * as COMPONENT from "../../../constants/componentTypes";
import { title } from "../../../fields/texts";

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
  type: COMPONENT.CHART,
  cssFor: "border-bottom",
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
    },

    xAxis: [
      {
        type: 'category',
        axisLabel: {
          interval: 0,
          fontSize: 12,
        },
        axisTick: {
          show: false
        },
        textId: "poc.chart.xAxis"
      }

    ],
    yAxis: [
      {
        show: false
      },
    ],

    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'none',
            color: 'none'
          }
        },
        dataId: "chart.auxData"
      },
      {
        name: '线索数',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top',
            distance: 10,
          }
        },
        dataId: "chart.origData",
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    ]
  }
}


const buttonField = {
  type: COMPONENT.LAYOUT,
  cssFor: "text-right",
  children: [{
    type: COMPONENT.BUTTON,
    events: {
      onClick: "add insight"
    },
    textId: "buttonLabels.new"
  }]

}

const userCasesDescriptor = [
  title("feedback.userCases.chartTitle", dateField),
  radioField,
  chartField,

  title("feedback.userCases.insightTitle", dateField),
  buttonField,
];

export default userCasesDescriptor;