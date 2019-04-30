import React from "react";
import { Col } from "antd";
import get from 'lodash/get';
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";


class Chart extends React.Component {
  axisLocalization(chartAxis) {
    const { messages } = this.props;

    return chartAxis.map(axis => {
      const { textId } = axis;
      if (!textId) return axis;

      const data = get(messages, textId, []);
      return { ...axis, data };
    });
  }

  setColorAndData(chartSeries) {
    return chartSeries.map(series => {
      const { dataId, itemStyle = {} } = series;
      // if (!dataId) return series;

      const { color } = this.props;
      const data = get(this.props.data, dataId, []);

      return {
        ...series, data,
        itemStyle: {
          ...itemStyle,
          color
        }
      }
    });
  }

  getOption() {
    const { option = {} } = this.props;
    const { series = [], xAxis = [], yAxis = [] } = option;

    const modifiedXAxis = this.axisLocalization(xAxis);
    const modifiedYAxis = this.axisLocalization(yAxis);
    const modifiedSeries = this.setColorAndData(series);

    return {
      ...option,
      xAxis: modifiedXAxis,
      yAxis: modifiedYAxis,
      series: modifiedSeries,
    };
  }

  render() {
    const { width = 24, offset = 0, notMerge = true } = this.props;

    return (
      <Col xs={width} offset={offset} className="renderer-chart">
        <ReactEcharts option={this.getOption()} notMerge={notMerge} className="chart" />
      </Col>
    );
  }
}


const mapStateToProps = state => ({
  color: state.setting.colors["--color-border"],
  messages: state.setting.messages
});

export default connect(
  mapStateToProps
)(Chart);
