const axisLine = { lineStyle: { type: "solid", color: "grey" } };

export default (xData, ...series) => ({
  legend: {},
  animation: false,
  textStyle: { color: "grey" },
  xAxis: [{
    axisLine,
    type: 'category',
    boundaryGap: false,
    data: xData
  }],
  yAxis: [{
    axisLine,
    type: "value",
    splitLine: { show: false }
  }],
  series: [
    ...series
  ]
});
