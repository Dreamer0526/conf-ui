import React from "react";
import { Col } from "antd";


class Card extends React.Component {

  render() {
    const { width = 24, offset = 0, children = [], events = {} } = this.props;

    return (
      <Col
        sm={width}
        offset={offset}
        className="card"
        {...this.props.registerEvents(events)}
      >
        {children.map(child => this.props.renderComponent(child))}
      </Col>
    );
  }
}


export default Card;
