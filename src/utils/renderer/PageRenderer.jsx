import React from "react";
import get from 'lodash/get';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button, Badge } from "antd";

import Menu from "./Menu";
import Tabs from "./Tabs";
import Chart from "./Chart";
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
    const { type, component } = field;

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

      case COMPONENT.DROPDOWN:
        return (
          <Dropdown {...field}
            registerEvents={this.registerEvents.bind(this)}
          />
        );

      case COMPONENT.COMPONENT:
        return component;

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

  renderButton({ textId, events = {}, cssFor = "", name = "", styleType = "", ...rest }) {
    return (
      <Button {...rest} className={cssFor} {...this.registerEvents(events)} name={name} type={styleType} >
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

  renderTag({ textId = "", events = {}, name = "", cssFor = "" }) {
    return (
      <Button
        name={name}
        ghost size="small" type="primary"
        className={`half-margin-top half-margin-right ${cssFor}`}
        {...this.registerEvents(events)}
      >
        <FormattedMessage
          id={textId}
          defaultMessage={textId} />
      </Button>
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
         * @desc get elemKey for different type of elements
         */
        const elemKey = get(e, "key")  // dropdown item
          || get(e, "target.value")     // buttonRadio
          || (e.currentTarget && e.currentTarget.getAttribute("name")) // button and tag

        /**
         * @todo remove log
         */
        console.log(e, elemKey)

        const action = elemKey ? { type: actionType, elemKey } : { type: actionType };
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


const mapStateToProps = state => ({ data: state });

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageRenderer);
