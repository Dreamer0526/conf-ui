import React from "react";
import { get } from 'lodash';
import { connect } from "react-redux";

import { Collapse } from "antd";
import ReactEcharts from "echarts-for-react";
import { FormattedMessage } from "react-intl";
import Chart, { BaseChart } from "../../utils/renderer/Chart";

import getBarOption from "./metadata/barChartOption";
import getLineOption from "./metadata/lineChartOption";


const tooltipWidth = 700;

const origin = {
  mousePosX: 0,
  mousePosY: 0,

  showTooltip: false,
  tooltipTitle: null,
  tooltipChartOption: {},

  showCollapse: false,
  pointerPos: 0,
  collapseTitle: null,
  collapseChartOption: {},
};

class UseCasesChart extends BaseChart {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.onEvents = {
      "click": this.handleOnClick,
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

  renderCollapse() {
    const { collapseTitle, collapseChartOption, pointerPos } = this.state;
    const { activeChart } = this.props;

    return (
      <div className={`collapse-chart-container ${activeChart}`}>
        <span className="collapse-chart-pointer" style={{ left: pointerPos + 5 }} />
        <span className="icon-2x close pull-right half-margin" onClick={() => this.setState({ showCollapse: false })} />
        {collapseTitle}
        <Chart option={collapseChartOption} className="collapse-chart" />
      </div>
    );
  }

  render() {
    const { showCollapse } = this.state;
    const { activeChart } = this.props;
    const option = getBarOption(activeChart);

    const mainChart = (
      <div onMouseMove={this.handleMouseMove}>
        <ReactEcharts
          option={this.fillInData(option)}
          onEvents={this.onEvents}
        />
      </div>
    );

    return (
      <div id="use-case-chart">
        {this.renderTooltip()}

        <Collapse bordered={false} activeKey={showCollapse.toString()}>
          <Collapse.Panel key="true" showArrow={false} header={mainChart}>
            {this.renderCollapse()}
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }


  handleOnClick(params) {
    const { dataIndex = -1 } = params;
    if (dataIndex < 0) return;

    this.configCollapse(params);

    const { mousePosX } = this.state;
    this.setState({ showCollapse: true, pointerPos: mousePosX });
  }

  handleMouseOut() {
    clearTimeout(this.timer);
    this.setState({ showTooltip: false });
  }

  handleMouseOver(params) {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.configTooltip(params);
      this.setState({ showTooltip: true });
    }, 500);
  }

  handleMouseMove(event) {
    const { clientX, clientY } = event;
    this.setState({ mousePosX: clientX, mousePosY: clientY });
  }


  configTooltip({ dataIndex, seriesIndex }) {
    const { activeChart, data, messages } = this.props;

    const category = get(messages, `feedback.useCases.mainX[${dataIndex}]`);
    const series = get(messages, `feedback.useCases.mainY${seriesIndex + 1}.${activeChart}`);
    const tooltipTitle = (
      <h1 className="base-margin-top">
        <FormattedMessage
          id="feedback.useCases.tooltipTitle"
          values={{ category, series }}
        />
      </h1>
    );

    const xLabel = get(messages, "feedback.useCases.tooltipX");
    const seriesName = get(messages, "feedback.useCases.tooltipSeries");
    const seriesData = get(data, `feedback.useCases.tooltipSeries.${dataIndex}.${seriesIndex}`);
    const tooltipChartOption = getLineOption({ xLabel, seriesName, seriesData });

    this.setState({ tooltipTitle, tooltipChartOption });
  }

  configCollapse({ dataIndex, seriesIndex }) {
    const { data, messages } = this.props;

    const category = get(messages, `feedback.useCases.mainX[${dataIndex}]`);
    const collapseTitle = (
      <h1 className="base-margin-top">
        <FormattedMessage
          id="feedback.useCases.collapseTitle"
          values={{ category }}
        />
      </h1>
    );

    const xLabel = get(messages, "feedback.useCases.collapseX");
    const seriesName = get(messages, "feedback.useCases.collapseSeries");
    const seriesData = get(data, `feedback.useCases.collapseSeries.${dataIndex}.${seriesIndex}`);
    const collapseChartOption = getLineOption({ xLabel, seriesName, seriesData });

    this.setState({ collapseTitle, collapseChartOption });
  }

}

const mapStateToProps = state => ({
  activeChart: state.feedback.useCases.activeChart,
  messages: state.setting.messages,
  data: state
});

export default connect(
  mapStateToProps
)(UseCasesChart);
