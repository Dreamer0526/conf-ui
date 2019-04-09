import React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";

import * as COMPONENT from "../../metadata/componentTypes";


class PageRenderer extends React.Component {

  render() {
    return (
      <Row className="page-renderer">
        {this.props.descriptor.map(desc => this.renderComponent(desc))}
      </Row>
    );
  }

  renderComponent(desc) {
    const { type } = desc;

    switch (type) {
      case COMPONENT.TEXT:
        return this.renderText(desc);

      case COMPONENT.BUTTON:
        return this.renderButton(desc);

      case COMPONENT.ICON:
        return this.renderIcon(desc);

      case COMPONENT.CARD:
        return this.renderCard(desc);

      case COMPONENT.MENU:
        return this.renderMenu(desc);

      default:
        const { children = [], width = 24, cssFor = "" } = desc;
        return (
          <Col sm={width} className={cssFor}>
            {children.map(child => this.renderComponent(child))}
          </Col>
        );
    }
  }

  renderText({ text = "", values = [] }) {
    const { data } = this.props;

    /**
     * Replace value placeholders with real values
     */
    let index = 0;
    const result = text.replace(/%{v}/gi, () => {
      const name = values[index];
      index = index + 1;
      return data[name];
    });

    return result;
  }

  renderButton({ text = "", events = {} }) {
    return (
      <Button {...this.registerEvents(events)}> {text} </Button>
    );
  }

  renderIcon({ text = "" }) {
    return (
      <span className={`icon ${text}`} />
    );
  }

  renderCard({ width, offset = 0, children = [], events = {} }) {
    return (
      <Col sm={width} offset={offset} className="card" {...this.registerEvents(events)}>
        {children.map(child => this.renderComponent(child))}
      </Col>
    );
  }

  renderMenu({ structure = [], mode = "vertical" }) {
    return (
      <Menu mode={mode}>
        {structure.map((item, index) => {
          const { title = "", options = [] } = item;

          return (
            <Menu.SubMenu key={`submenu-${index}`} title={title}>
              {options.map(
                ({ key, label, action }) =>
                  <Menu.Item key={key} onClick={() => action && this.props.dispatch({ type: action })} >
                    {label}
                  </Menu.Item>
              )}
            </Menu.SubMenu>
          );
        })}
      </Menu>
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
