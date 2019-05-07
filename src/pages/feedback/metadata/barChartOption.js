const axisTick = { show: false };
const splitLine = { show: false };
const axisLine = { lineStyle: { type: "solid", color: "grey" } };

const execColor = ["#FFAB00", "#00CBC5"];
const valueColor = ['#00C9FE', '#0082F0'];


const yAxis = nameId => ({
  type: "value",
  axisLine,
  splitLine,
  nameId,
});


function getOption(chartName) {
  const color = (chartName === "leadValue") ? valueColor : execColor;

  const option = {
    animation: false,
    textStyle: { color: "grey" },
    legend: { left: 0 },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: () => ""
    },

    color,
    xAxis: [{
      axisTick,
      axisLine,
      type: "category",
      nameId: "feedback.useCases.mainX"
    }],
    yAxis: [
      yAxis(`feedback.useCases.mainY1.${chartName}`),
      yAxis(`feedback.useCases.mainY2.${chartName}`)
    ],
    series: [
      {
        type: "bar",
        barGap: 0.1,
        yAxisIndex: 0,
        dataId: "feedback.useCases.mainSeries[0]",
        nameId: `feedback.useCases.mainSeries.${chartName}[0]`,
      },
      {
        type: "bar",
        barGap: 0.1,
        yAxisIndex: 1,
        dataId: "feedback.useCases.mainSeries[1]",
        nameId: `feedback.useCases.mainSeries.${chartName}[1]`,
      }
    ]
  };

  return option;
};

export default getOption;