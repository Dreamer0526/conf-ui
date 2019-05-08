var data = [
  [0, 0, 5], [0, 1, 6], [0, 2, 15], [0, 3, 4], [0, 4, 12], [0, 5, 10], [0, 6, 5], [0, 7, 8], [0, 8, 9], [0, 9, 10],
  [1, 0, 7], [1, 1, 13], [1, 2, 12], [1, 3, 3], [1, 4, 9], [1, 5, 10], [1, 6, 8], [1, 7, 11], [1, 8, 8], [1, 9, 3],
  [2, 0, 5], [2, 1, 10], [2, 2, 7], [2, 3, 5], [2, 4, 10], [2, 5, 9], [2, 6, 11], [2, 7, 3], [2, 8, 8], [2, 9, 6],
  [3, 0, 7], [3, 1, 13], [3, 2, 11], [3, 3, 6], [3, 4, 3], [3, 5, 12], [3, 6, 14], [3, 7, 5], [3, 8, 15], [3, 9, 10],
  [4, 0, 7], [4, 1, 9], [4, 2, 13], [4, 3, 5], [4, 4, 10], [4, 5, 11], [4, 6, 5], [4, 7, 12], [4, 8, 10], [4, 9, 12],
  [5, 0, 12], [5, 1, 11], [5, 2, 14], [5, 3, 3], [5, 4, 13], [5, 5, 10], [5, 6, 11], [5, 7, 6], [5, 8, 13], [5, 9, 9]
];


data = data.map(item => [item[1], item[0], item[2]]);

const option = {
  tooltip: {
    style: 'shadow',
    formatter: () => ""
  },
  animation: false,
  xAxis: [{
    type: 'category',
    data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
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
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F'],
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
    orient: 'vertical',
    left: 'right',
    bottom: '50%',
    inRange: {
      color: ['#0D2E68', '#EFF9D6']
    }
  },
  series: [{
    type: 'heatmap',
    data: data,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      }
    }
  }]
};

export default option;