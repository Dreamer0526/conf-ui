import * as React from "react";
import { Row, Col, Button } from "antd";
import * as COMPONENT_TYPE from "../../metadata/componentTypes";

class PageRenderer extends React.Component {

  renderText({ name = "", text = "", width = 24, offset = 0 }) {
    return (
      <Col md={width} offset={offset} style={{ border: "1px solid" }}>
        {text}
      </Col >
    );
  }

  renderButton({ width = 24, offset = 0, label = "" }) {
    return (
      <Col md={width} offset={offset}>
        <Button> {label} </Button>
      </Col>
    );
  }

  renderIcon({ width = 24, offset = 0, text = "" }) {
    return (
      <Col md={width} offset={offset}>
        <div className={`icon ${text}`} />
      </Col>
    )
  }

  renderCard({ width = 24, offset = 0, children = [] }) {
    return (
      <Col md={width} offset={offset}>
        {children.map(child => this.renderComponent(child))}
      </Col>
    );
  }

  renderComponent(desc) {
    const { type = COMPONENT_TYPE.TEXT } = desc;

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
        return null;
    }
  }

  render() {
    return (
      <Row className="page-renderer">
        {this.props.descriptor.map(desc => this.renderComponent(desc))}
      </Row>
    );
  }
}

export default PageRenderer;