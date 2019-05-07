import React from "react";
import { Collapse } from "antd";
import { get, set } from 'lodash';
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";
import { FormattedMessage } from "react-intl";
import Chart from "../../utils/renderer/Chart";

import getLineOption from "./metadata/lineChartOption";


const tooltipWidth = 700;
const pointerBias = { x: -120, y: -50 };

const origin = {
  showTooltip: false,
  tooltipX: 0,
  tooltipY: 0,
  tooltipTitle: null,
  tooltipChartOption: {},

  showCollapse: false,
  collapseTitle: null,
  collapseChartOption: {},
};

class UseCasesChart extends React.Component {
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
        const path = `${attr}[${index}]`;

        // fill in data
        if (dataId) {
          const numbers = get(data, dataId, 0);
          set(option, `${path}.data`, numbers);
        }

        // localization
        if (nameId) {
          const text = get(messages, nameId, "");
          const key = attr !== "xAxis" ? "name" : "data";
          set(option, `${path}.${key}`, text);
        }
      });

    });

    return option;
  }


  renderTooltip() {
    const { tooltipX, tooltipY, tooltipChartOption, tooltipTitle } = this.state;

    return (
      <div
        style={{ top: tooltipY, left: tooltipX, width: tooltipWidth }}
        className="tooltip-chart-container"
      >
        {tooltipTitle}
        <Chart option={tooltipChartOption} />
      </div>
    );
  }

  renderCollapse() {
    const { collapseTitle, collapseChartOption } = this.state;

    return (
      <div className="collapse-chart-container">
        <span className="icon-2x close pull-right half-margin" onClick={() => this.setState({ showCollapse: false })} />
        {collapseTitle}
        <Chart option={collapseChartOption} />
      </div>
    );
  }

  render() {
    const { showTooltip, showCollapse } = this.state;

    const mainChart = (
      <div onMouseMove={this.handleMouseMove}>
        <ReactEcharts
          ref={e => this.chart = e}
          option={this.getOption()}
          onEvents={this.onEvents}
        />
      </div>
    );

    return (
      <div id="use-case-chart">
        {showTooltip && this.renderTooltip()}

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
    this.setState({ showCollapse: true });
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
    const windowWidth = document.body.clientWidth;
    const maxLeft = windowWidth - tooltipWidth - 20;

    this.setState({
      tooltipY: event.clientY + pointerBias.y,
      tooltipX: Math.min(event.clientX, maxLeft) + pointerBias.x
    });
  }


  configTooltip({ dataIndex, seriesIndex }) {
    const { data, messages } = this.props;

    const category = get(messages, `feedback.useCases.mainX[${dataIndex}]`);
    const series = get(messages, `feedback.useCases.mainY${seriesIndex + 1}`);
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
  messages: state.setting.messages,
  data: state
});

export default connect(
  mapStateToProps
)(UseCasesChart);
