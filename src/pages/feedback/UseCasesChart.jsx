import React from "react";
import { get, set } from 'lodash';
import { connect } from "react-redux";
import { Collapse, Button, Icon, Row } from "antd";

import ReactEcharts from "echarts-for-react";


const tooltipWidth = 700, tooltipHeight = 300;
const pointerBias = { x: -120, y: -50 };

const origin = {
  activeCollapseKey: null,
  showTooltip: false,
  left: 0,
  top: 0,
};

class UseCasesChart extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.onEvents = {
      "click": this.handleOnClick,
      "mouseout": this.handleMouseOut,
      "mouseover": this.handleMouseOver,
    };

    this.state = { ...origin };

    this.chart = null;
    this.timer = null;
  }

  /**
   * @desc manually setOption for echart when updated
   */
  componentDidUpdate() {
    const option = this.getOption();
    this.chart.getEchartsInstance().setOption(option);
  }

  getOption() {
    const { option, messages, data } = this.props;

    /**
     * @desc Replace placeholder with data/localization
     */
    Object.keys(option).forEach(attr => {
      const value = option[attr];
      if (!(value instanceof Array)) return;

      value.forEach((conf, index) => {
        const { nameId, dataId } = conf;
        if (!nameId && !dataId) return;

        const path = `${attr}[${index}]`;

        // data
        const numbers = get(data, dataId, 0);
        set(option, `${path}.data`, numbers);

        // localization
        const text = get(messages, nameId, "");
        const key = attr !== "xAxis" ? "name" : "data";
        set(option, `${path}.${key}`, text);
      });

    });

    return option;
  }


  render() {
    const { top, left, showTooltip, activeCollapseKey } = this.state;
    const visibility = showTooltip ? "visible" : "hidden";

    const mainChart = (
      <ReactEcharts
        ref={e => this.chart = e}
        option={this.getOption()}
        onEvents={this.onEvents}
      />
    );
    const tooltipChart = this.renderLineChart();
    const collapseChart = this.renderLineChart();

    return (
      <div onMouseMove={this.handleMouseMove} >
        <Collapse
          bordered={false}
          activeKey={activeCollapseKey}
          onChange={this.handleCollapse}
        >
          <Collapse.Panel key="1"
            showArrow={false}
            header={mainChart}
          >
            {collapseChart}
          </Collapse.Panel>
        </Collapse>

        <div className="tooltip-chart-container" style={{ top, left, visibility, width: tooltipWidth, height: tooltipHeight }} >
          {tooltipChart}
        </div>
      </div>
    );
  }


  handleCollapse(key) {
    this.setState({ activeCollapseKey: key });
  }

  handleOnClick(params) {
    const { dataIndex, seriesIndex } = params;
    console.log(dataIndex, seriesIndex);
  }

  handleMouseOut() {
    clearTimeout(this.timer);
    this.setState({ showTooltip: false });
  }

  handleMouseOver(params) {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setState({ showTooltip: true });
    }, 500);
  }

  handleMouseMove(event) {
    const windowWidth = document.body.clientWidth;
    const maxLeft = windowWidth - tooltipWidth - 20;

    this.setState({
      top: event.clientY + pointerBias.y,
      left: Math.min(event.clientX, maxLeft) + pointerBias.x
    });
  }


  renderLineChart() {
    const option = {
      legend: {},
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{
        type: 'value'
      }],
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
    return (
      <Row>
        <Row className="text-right">
          <span className="icon-2x close" onClick={this.handleCollapse} />
        </Row>
        <ReactEcharts option={option} />
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.setting.messages,
  data: state
});

export default connect(
  mapStateToProps
)(UseCasesChart);
