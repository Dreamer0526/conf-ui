import React from "react";
import get from 'lodash/get';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button, Badge, Tag } from "antd";

import Menu from "./Menu";
import Tabs from "./Tabs";
import Chart from "./Chart";
import Table from "./Table";
import Dropdown from "./Dropdown";
import ButtonRadio from "./ButtonRadio";

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

      case COMPONENT.IMAGE:
        return this.renderImage(field);

      case COMPONENT.TAG:
        return this.renderTag(field);

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

      case COMPONENT.BUTTON_RADIO:
        return (
          <ButtonRadio {...field}
            registerEvents={this.registerEvents.bind(this)}
          />
        );

      case COMPONENT.CHART:
        return <Chart {...field} data={this.props.data} />;

      case COMPONENT.TABLE:
        return <Table {...field} data={this.props.data} />

      case COMPONENT.DROPDOWN:
        return (
          <Dropdown {...field}
            registerEvents={this.registerEvents.bind(this)}
          />
        );

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
          defaultMessage={textId}
        />
      </span>
    );
  }

  renderButton({ textId, events = {}, cssFor = "", name = "", ...rest }) {
    return (
      <Button className={cssFor} {...this.registerEvents(events)} name={name} {...rest}>
        <FormattedMessage
          id={textId}
          defaultMessage={textId}
        />
      </Button>
    );
  }

  renderIcon({ icon = "", size = 1, cssFor = "", badge }) {
    const Icon = (
      <span className={`icon-${size}x ${icon} ${cssFor}`} />
    );

    return badge ? this.withBadge(Icon, badge) : Icon;
  }

  renderImage({ src = "", width = "50px" }) {
    return (
      <img src={src} width={width} alt="" />
    )
  }

  renderTag({ textId = "" }) {
    return (
      <Tag color="blue" className="half-margin-top">
        <FormattedMessage
          id={textId}
          defaultMessage={textId} />
      </Tag>
    );
  }

  renderLayout({ width = 24, offset = 0, children = [], cssFor = "", badge }) {
    const Layout = (
      <Col xs={width} offset={offset} className={cssFor}>
        {children.map(child => this.renderComponent(child))}
      </Col>
    );

    return badge ? this.withBadge(Layout, badge) : Layout;
  }


  registerEvents(events) {
    const result = {};

    for (let [event, actionType] of Object.entries(events)) {

      const callback = e => {
        /**
         * @desc get targetId for different type of elements
         */
        const targetId = get(e, "key")  // dropdown item
          || get(e, "target.value")     // buttonRadio
          || (e.currentTarget && e.currentTarget.getAttribute("name")) // button

        console.log(targetId)

        const action = targetId ? { type: actionType, targetId } : { type: actionType };
        this.props.dispatch(action);
      };

      Object.defineProperty(result, event, {
        value: callback,
        enumerable: true
      });
    }

    return result;
  }


  withBadge(WrappedComponent, badge) {
    const count = (typeof badge === "string") ? get(this.props.data, badge, 0) : this.renderComponent(badge);
    return (<Badge count={count}> {WrappedComponent} </Badge >);
  }

}


const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapDispatchToProps
)(PageRenderer);
