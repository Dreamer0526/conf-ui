const option = {
  tooltip: {
    style: "shadow",
    formatter: () => ""
  },
  animation: false,
  xAxis: [{
    type: "category",
    nameId: "feedback.custGroups.mainX",
    splitArea: {
      show: true
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    type: "category",
    nameId: "feedback.custGroups.mainY",
    splitArea: {
      show: true
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }],
  visualMap: {
    min: 3,
    max: 15,
    calculable: true,
    orient: "vertical",
    left: "right",
    top: "middle",
    inRange: {
      color: ["#0D2E68", "#EFF9D6"]
    }
  },
  series: [{
    type: "heatmap",
    dataId: "feedback.custGroups.mainSeries",
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.3)"
      }
    }
  }]
};

export default () => option