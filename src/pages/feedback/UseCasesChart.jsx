import React from "react";
import { connect } from "react-redux";

import { Collapse, Button } from "antd";
import ReactEcharts from "echarts-for-react";

import * as ACTION from "../../constants/actionTypes";

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

    this.state = {
      showTooltip: false,
      showCollapse: false,
    };

    this.timer = null;
    this.mousePosX = 0;
    this.mousePosY = 0;
    this.pointerPos = 0;
    this.tooltipWidth = 700;
  }


  renderTooltip() {
    const { mousePosX, mousePosY } = this;
    const { showTooltip } = this.state;
    const { tooltipChartOption } = this.props;

    if (!showTooltip) return;

    const windowWidth = document.body.clientWidth;
    const maxLeft = windowWidth - this.tooltipWidth;
    const style = {
      top: mousePosY + 5,
      left: Math.max(0, Math.min(mousePosX, maxLeft)) + 5,
      width: this.tooltipWidth
    };

    return (
      <div style={style} className={`tooltip-chart-container`}>
        <ReactEcharts option={tooltipChartOption} />
      </div>
    );
  }

  renderCollapse() {
    const { pointerPos } = this;
    const { collapseChartOption } = this.props;

    return (
      <div className={`collapse-chart-container`}>
        <span className="collapse-chart-pointer" style={{ left: pointerPos + 5 }} />
        <Button
          icon="close"
          shape="circle"
          className="pull-right z-index-10"
          onClick={() => this.setState({ showCollapse: false })}
        />
        <ReactEcharts option={collapseChartOption} className="collapse-chart" />
      </div>
    );
  }

  render() {
    const { mainChartOption, activeChart } = this.props;
    const { showCollapse } = this.state;

    const mainChart = (
      <div onMouseMove={this.handleMouseMove}>
        <ReactEcharts
          option={mainChartOption}
          onEvents={this.onEvents}
        />
      </div>
    );

    return (
      <div className={`chart-container ${activeChart}`}>
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

    this.props.dispatch({
      type: ACTION.MOUSE_CLICK_CHART_ITEM_PARAMS,
      payload: params
    });

    this.pointerPos = this.mousePosX;
    this.setState({ showCollapse: true });
  }

  handleMouseOut() {
    clearTimeout(this.timer);
    this.setState({ showTooltip: false });
  }

  handleMouseOver(params) {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.props.dispatch({
        type: ACTION.MOUSE_OVER_CHART_ITEM_PARAMS,
        payload: params
      });

      this.setState({ showTooltip: true });
    }, 500);
  }

  handleMouseMove(event) {
    this.mousePosX = event.clientX;
    this.mousePosY = event.clientY;
  }

}


const mapStateToProps = state => ({
  messages: state.setting.messages,
  ...state.feedback.useCases,
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UseCasesChart);
