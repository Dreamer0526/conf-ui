import React from "react";
import { get } from 'lodash';
import { connect } from "react-redux";

import ReactEcharts from "echarts-for-react";
import { FormattedMessage } from "react-intl";
import Chart, { BaseChart } from "../../utils/renderer/Chart";

import getLineOption from "./metadata/lineChartOption";
import getHeatMapOption from "./metadata/heatMapOption";


const tooltipWidth = 700;

const origin = {
  mousePosX: 0,
  mousePosY: 0,

  showTooltip: false,
  tooltipTitle: null,
  tooltipChartOption: {},
};

class CustGroupsChart extends BaseChart {
  constructor(props) {
    super(props);

    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.onEvents = {
      "mouseout": this.handleMouseOut,
      "mouseover": this.handleMouseOver,
    };

    this.state = { ...origin };
    this.timer = null;
  }


  renderTooltip() {
    const { showTooltip, mousePosX, mousePosY, tooltipChartOption, tooltipTitle } = this.state;
    const { activeChart } = this.props;

    if (!showTooltip) return;

    const windowWidth = document.body.clientWidth;
    const maxLeft = windowWidth - tooltipWidth;
    const style = {
      top: mousePosY + 5,
      left: Math.max(0, Math.min(mousePosX, maxLeft)) + 5,
      width: tooltipWidth
    };

    return (
      <div style={style} className={`tooltip-chart-container ${activeChart}`}>
        {tooltipTitle}
        <Chart option={tooltipChartOption} />
      </div>
    );
  }

  render() {
    const { activeChart } = this.props;
    const option = getHeatMapOption(activeChart);

    return (
      <div id="cust-group-chart">
        {this.renderTooltip()}
        <div onMouseMove={this.handleMouseMove}>
          <ReactEcharts
            option={this.fillInData(option)}
            onEvents={this.onEvents}
          />
        </div>
      </div>
    );
  }


  handleMouseOut() {
    clearTimeout(this.timer);
    this.setState({ showTooltip: false });
  }

  handleMouseOver(params) {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      const { data } = params;
      this.configTooltip(data);
      this.setState({ showTooltip: true });
    }, 500);
  }

  handleMouseMove(event) {
    const { clientX, clientY } = event;
    this.setState({ mousePosX: clientX, mousePosY: clientY });
  }


  configTooltip([dataIndex, seriesIndex]) {
    const { data, messages } = this.props;

    const categoryX = get(messages, `feedback.custGroups.mainX[${dataIndex}]`);
    const categoryY = get(messages, `feedback.custGroups.mainY[${seriesIndex}]`);
    const tooltipTitle = (
      <h1 className="base-margin-top">
        <FormattedMessage
          id="feedback.custGroups.tooltipTitle"
          values={{ categoryX, categoryY }}
        />
      </h1>
    );

    const xLabel = get(messages, "feedback.custGroups.tooltipX");
    const seriesName = get(messages, "feedback.custGroups.tooltipSeries");
    const seriesData = get(data, `feedback.custGroups.tooltipSeries.${dataIndex}.${seriesIndex}`);
    const tooltipChartOption = getLineOption({ xLabel, seriesName, seriesData });

    this.setState({ tooltipTitle, tooltipChartOption });
  }

}

const mapStateToProps = state => ({
  activeChart: state.feedback.custGroups.activeChart,
  messages: state.setting.messages,
  data: state
});

export default connect(
  mapStateToProps
)(CustGroupsChart);
