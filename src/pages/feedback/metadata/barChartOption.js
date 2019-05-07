import assign from 'lodash/assign';


const axisTick = { show: false };
const splitLine = { show: false };
const axisLine = { lineStyle: { type: "solid", color: "grey" } };

const yAxis = nameId => ({
  type: 'value',
  axisLine,
  splitLine,
  nameId
  // name: 'y1',
});

const option = {
  animation: false,
  color: ['#00C9FE', '#0082F0'],
  textStyle: { color: "grey" },
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
    nameId: "feedback.useCases.valueChart.mainX"
    // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }],
  yAxis: [
    yAxis("feedback.useCases.valueChart.mainY1"),
    yAxis("feedback.useCases.valueChart.mainY2")
  ],
  series: [
    {
      // name: 'Forest',
      nameId: "feedback.useCases.valueChart.mainSeries[0]",
      type: 'bar',
      barGap: 0.1,
      yAxisIndex: 0,
      dataId: "feedback.useCases.valueChart.mainSeries[0]"
      // data: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],
    },
    {
      // name: 'Steppe',
      nameId: "feedback.useCases.valueChart.mainSeries[1]",
      type: 'bar',
      barGap: 0.1,
      yAxisIndex: 1,
      dataId: "feedback.useCases.valueChart.mainSeries[1]",
      // data: [25, 50, 75, 100, 125, 150, 200, 224, 250, 275]
    }
  ]
};


export default config => assign(option, config);
