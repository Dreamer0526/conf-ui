import React from "react";
import ec from "echarts";


const option = {
  color: ['#00C9FE', '#0082F0'],
  legend: {
    data: ['Forest', 'Steppe'],
    left: 0
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: 'shadow'
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'y1'
    },
    {
      type: 'value',
      name: 'y2'
    }
  ],
  series: [
    {
      name: 'Forest',
      type: 'bar',
      barGap: 0.2,
      yAxisIndex: 0,
      data: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],

    },
    {
      name: 'Steppe',
      type: 'bar',
      yAxisIndex: 1,
      data: [25, 50, 75, 100, 125, 150, 200, 224, 250, 275]
    }
  ]
};

class Test extends React.Component {

  state = {
    showDetail: false,
    top: 0,
    left: 0
  };

  componentDidMount() {
    const myChart = ec.init(document.getElementById('test-chart'));
    myChart.setOption(option);

    myChart.on('click', function (params) {
      console.log(params);
    });

    myChart.on('mouseover', params => {
      console.log(params);
      this.setState({ showDetail: true })
    });


    myChart.on('mouseout', params => {
      console.log(params);
      this.setState({ showDetail: false })
    });
  }


  setMousePos(e) {
    this.setState({
      top: e.clientY + 10,
      left: e.clientX + 10
    });
  }


  render() {
    const { top, left, showDetail } = this.state;
    const visibility = showDetail ? "visible" : "hidden";

    return (
      <div onMouseMove={this.setMousePos.bind(this)} >
        <div id="test-chart" style={{ width: 900, height: 300 }} />
        <div className="chart-tooltip" style={{ top, left, visibility }} >
          "lalala"
        </div>
      </div>

    );
  }
}

export default Test;