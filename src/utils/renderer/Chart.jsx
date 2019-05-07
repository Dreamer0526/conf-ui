import React from "react";
import { Col } from "antd";
import { get, set } from 'lodash';
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";


class Chart extends React.Component {
  chart = null;

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
    const { width = 24, offset = 0, cssFor } = this.props;

    return (
      <Col xs={width} offset={offset} className={`renderer-chart ${cssFor}`}>
        <ReactEcharts ref={e => this.chart = e} option={this.getOption()} />
      </Col>
    );
  }
}


const mapStateToProps = state => ({
  messages: state.setting.messages,
  data: state
});

export default connect(
  mapStateToProps
)(Chart);
