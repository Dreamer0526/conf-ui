import { set } from "lodash";


const axisLine = { lineStyle: { type: "solid", color: "grey" } };

function getOption({ xLabel = [], seriesName = [], seriesData = [] }) {
  const option = {
    legend: {},
    animation: false,
    textStyle: { color: "grey" },
    xAxis: [{
      axisLine,
      type: 'category',
      boundaryGap: false,
      data: xLabel
    }],
    yAxis: [{
      type: "value",
      splitLine: { show: false },
      axisLine
    }],
    series: []
  }

  seriesName.forEach((name, index) => {
    const item = {
      type: "line",
      name,
      data: seriesData[index]
    }

    set(option, `series[${index}]`, item);
  });

  return option;
}


export default getOption;