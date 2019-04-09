import React from "react";
import { Col } from "antd";
import get from 'lodash/get';
import ReactEcharts from "echarts-for-react";


class Chart extends React.Component {

  getOption() {
    const { option = {}, data = {} } = this.props;
    const { series = [] } = option;

    const modifiedSeries = series.map(item => {
      const { data: dataPathList = [] } = item;
      /**
       * Replace path name claimed in descriptor with real data stored in redux
       */
      const replacedData = dataPathList.map(path => get(data, path, 0));

      return {
        ...item,
        data: replacedData
      };
    });

    return {
      ...option,
      series: modifiedSeries
    };
  }

  render() {
    const { width = 24, offset = 0, notMerge = true } = this.props;

    return (
      <Col md={width} offset={offset} className="renderer-chart">
        <ReactEcharts option={this.getOption()} notMerge={notMerge} className="chart" />
      </Col>
    );
  }
}


export default Chart;


