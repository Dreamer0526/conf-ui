import assign from 'lodash/assign';


const axisTick = { show: false };
const splitLine = { show: false };
const textStyle = { color: "grey" };
const axisLine = { lineStyle: { type: "solid", color: "grey" } };

const yAxis = nameId => ({
  type: 'value',
  axisLine,
  splitLine,
  nameId
  // name: 'y1',
});

const option = {
  color: ['#00C9FE', '#0082F0'],
  textStyle,
  legend: { left: 0 },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: 'shadow' },
    formatter: () => ""
  },
  xAxis: [{
    type: 'category',
    axisTick,
    axisLine,
    nameId: "feedback.userCases.valueChartX"
    // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }],
  yAxis: [
    yAxis("feedback.userCases.valueChartY1"),
    yAxis("feedback.userCases.valueChartY2")
  ],
  series: [
    {
      // name: 'Forest',
      nameId: "feedback.userCases.valueChartSeries1",
      type: 'bar',
      barGap: 0.1,
      yAxisIndex: 0,
      dataId: "feedback.userCases.valueChartSeries1"
      // data: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],
    },
    {
      // name: 'Steppe',
      nameId: "feedback.userCases.valueChartSeries2",
      type: 'bar',
      barGap: 0.1,
      yAxisIndex: 1,
      dataId: "feedback.userCases.valueChartSeries2",
      // data: [25, 50, 75, 100, 125, 150, 200, 224, 250, 275]
    }
  ]
};


export default config => assign(option, config);
