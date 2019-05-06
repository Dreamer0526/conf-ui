import React from "react";
import ec from "echarts";
import ReactEcharts from "echarts-for-react";


const tooltipWidth = 700, tooltipHeight = 300;
const pointerBias = {
  x: -120,
  y: -50
};

class UserCaseBarChart extends React.Component {

  state = {
    showTooltip: false,
    top: 0,
    left: 0
  };

  componentDidMount() {
    const { option } = this.props;

    const myChart = ec.init(document.getElementById('user-case-bar-chart'));
    myChart.setOption(option);

    myChart.on('click', this.handleOnClick.bind(this));
    myChart.on('mouseover', this.handleMouseOver.bind(this));
    myChart.on('mouseout', this.handleMouseOut.bind(this));
  }


  handleMouseMove(event) {
    const windowWidth = document.body.clientWidth;
    const maxLeft = windowWidth - tooltipWidth - 20;


    this.setState({
      top: event.clientY + pointerBias.y,
      left: Math.min(event.clientX, maxLeft) + pointerBias.x
    });
  }

  handleOnClick(params) {
    console.log(params);
  }

  handleMouseOver(params) {
    this.setState({ showTooltip: true });
    console.log(params);
  }

  handleMouseOut() {
    this.setState({ showTooltip: false });
  }


  render() {
    const { top, left, showTooltip } = this.state;
    const visibility = showTooltip ? "visible" : "hidden";

    return (
      <div onMouseMove={this.handleMouseMove.bind(this)} >
        <div id="user-case-bar-chart" />
        <div className="chart-tooltip" style={{ top, left, visibility, width: tooltipWidth, height: tooltipHeight }} >
          {this.renderLineChart()}
        </div>
      </div>
    );
  }

  renderLineChart() {
    const option = {
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
    return <ReactEcharts option={option} />
  }

}

export default UserCaseBarChart;