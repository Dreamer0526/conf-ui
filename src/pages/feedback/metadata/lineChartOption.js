import { set } from "lodash";


const splitLine = { show: false };
const axisLine = { lineStyle: { type: "solid", color: "grey" } };

const sampleOption = {
  legend: {},
  textStyle: { color: "grey" },
  xAxis: [{
    axisLine,
    type: 'category',
    boundaryGap: false,
    // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    nameId: "feedback.useCases.valueChart.tooltipX"
  }],
  yAxis: [{
    type: "value",
    splitLine,
    axisLine
  }],
  series: [
    {
      type: "line",
      // name: '邮件营销',
      // data: [120, 132, 101, 134, 90, 230, 210],
      nameId: "feedback.useCases.valueChart.tooltipSeries1",
      dataId: "feedback.useCases.valueChart.tooltipSeries.0.1[0]"
    },
    {
      type: "line",
      // name: '联盟广告',
      // data: [220, 182, 191, 234, 290, 330, 310]
      nameId: "feedback.useCases.valueChart.tooltipSeries2",
      dataId: "feedback.useCases.valueChart.tooltipSeries.0.1[1]"
    },
    {
      type: "line",
      // name: '视频广告',
      // data: [150, 232, 201, 154, 190, 330, 410]
      nameId: "feedback.useCases.valueChart.tooltipSeries3",
      dataId: "feedback.useCases.valueChart.tooltipSeries.0.1[2]"
    }
  ]
};


function getOption({ prefix, dataIndex, seriesIndex, seriesCount }) {

  const option = {
    animation: false,
    legend: {},
    textStyle: { color: "grey" },
    xAxis: [{
      axisLine,
      type: 'category',
      boundaryGap: false,
      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      nameId: `${prefix}X`
    }],
    yAxis: [{
      type: "value",
      splitLine,
      axisLine
    }],
    series: []
  }

  for (let index = 0; index < seriesCount; index++) {
    const item = {
      type: "line",
      nameId: `${prefix}Series${index + 1}`,
      dataId: `${prefix}Series.${dataIndex}.${seriesIndex}[${index}]`
    };

    set(option, `series[${index}]`, item);
  }

  return option;
}


export default getOption;