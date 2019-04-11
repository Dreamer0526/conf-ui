import * as COMPONENT from "../../../constants/componentTypes";

import { title } from "./title";


const option = {
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
      textId: "chart.xAxis"
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
};


export const chart_curr_dist_overview = {
  type: COMPONENT.CARD,
  width: 23,
  children: [
    {
      width: 6,
      offset: 1,
      cssFor: "text-left",
      children: [
        title("chart.title")
      ]
    }, {
      width: 24,
      children: [{
        type: COMPONENT.CHART,
        option
      }]
    }
  ]
};