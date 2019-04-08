import * as React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";

import * as COMPONENT_TYPE from "../../metadata/componentTypes";

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
      case COMPONENT_TYPE.TEXT:
        return this.renderText(desc);

      case COMPONENT_TYPE.BUTTON:
        return this.renderButton(desc);

      case COMPONENT_TYPE.ICON:
        return this.renderIcon(desc);

      case COMPONENT_TYPE.CARD:
        return this.renderCard(desc);

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
    const result = text.replace(/\${v}/gi, () => {
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
