import { set } from "lodash";

const axisLine = { lineStyle: { type: "solid", color: "grey" } };


const yItem = name => ({
  name,
  axisLine,
  type: "value",
  splitLine: { show: false },
});

const seriesItem = (yAxisIndex, name, data) => ({
  name,
  data,
  yAxisIndex,
  type: "bar",
  barGap: 0.1
});


function getBarOption(xData = [], nameDataPairs = {}) {
  const option = {
    animation: false,
    legend: { left: 0 },
    textStyle: { color: "grey" },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: () => ""
    },
    xAxis: [{
      axisTick: { show: false },
      type: "category",
      data: xData,
      axisLine,
    }],
    yAxis: [],
    series: []
  }

  Object.keys(nameDataPairs).forEach((name, index) => {
    const data = nameDataPairs[name];
    set(option, `yAxis[${index}]`, yItem(name));
    set(option, `series[${index}]`, seriesItem(index, name, data));
  });

  return option;
}

export default getBarOption;