import React from "react";
import { get, set } from 'lodash';
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";


export class BaseChart extends React.Component {

  fillInData(option) {
    const { messages, data } = this.props;

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
          const key = this.isAxisLabel(attr) ? "data" : "name";
          set(option, `${path}.${key}`, text);
        }
      });

    });

    return option;
  }

  isAxisLabel(attrName) {
    return attrName === "xAxis" || attrName === "yAxis";
  }

  render() {
    const { option, ...rest } = this.props;

    return (
      <ReactEcharts option={this.fillInData(option)} {...rest} />
    );
  }
}


const mapStateToProps = state => ({
  messages: state.setting.messages,
  data: state
});

export default connect(
  mapStateToProps
)(BaseChart);
