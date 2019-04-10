import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";
import { FormattedMessage } from 'react-intl';

import Card from "./Card";
import Menu from "./Menu";
import Tabs from "./Tabs";
import Chart from "./Chart";

import * as COMPONENT from "../../constants/componentTypes";


class PageRenderer extends React.Component {

  render() {
    return (
      <Row className="page-renderer">
        {this.props.descriptor.map(field => this.renderComponent(field))}
      </Row>
    );
  }

  renderComponent(field) {
    const { type } = field;

    switch (type) {
      case COMPONENT.TEXT:
        return this.renderText(field);

      case COMPONENT.BUTTON:
        return this.renderButton(field);

      case COMPONENT.ICON:
        return this.renderIcon(field);

      case COMPONENT.CARD:
        return (
          <Card {...field}
            registerEvents={this.registerEvents.bind(this)}
            renderComponent={this.renderComponent.bind(this)}
          />
        );

      case COMPONENT.MENU:
        return (
          <Menu {...field}
            registerEvents={this.registerEvents.bind(this)}
            renderComponent={this.renderComponent.bind(this)}
          />
        );

      case COMPONENT.TABS:
        return (
          <Tabs {...field}
            renderComponent={this.renderComponent.bind(this)}
          />
        );

      case COMPONENT.CHART:
        return <Chart {...field} data={this.props.data} />;

      case COMPONENT.LAYOUT:
      default:
        return this.renderLayout(field);
    }
  }


  renderText({ textId, cssFor = "" }) {
    const { data } = this.props;

    return (
      <span className={cssFor}>
        <FormattedMessage
          id={textId}
          values={data}
        />
      </span>
    );
  }

  renderButton({ textId, events = {}, cssFor = "" }) {
    return (
      <Button className={cssFor} {...this.registerEvents(events)}> {textId} </Button>
    );
  }

  renderIcon({ icon = "", cssFor = "" }) {
    return (
      <span className={`icon ${icon} ${cssFor}`} />
    );
  }

  renderLayout({ width = 24, offset = 0, children = [], cssFor = "" }) {
    return (
      <Col md={width} offset={offset} className={cssFor}>
        {children.map(child => this.renderComponent(child))}
      </Col>
    );
  }


  registerEvents(events) {
    const result = {};

    for (let [event, actionType] of Object.entries(events)) {
      Object.defineProperty(
        result,
        event,
        {
          value: () => this.props.dispatch({ type: actionType }),
          enumerable: true
        }
      );
    }
    return result;
  }

}


const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapDispatchToProps
)(PageRenderer);
