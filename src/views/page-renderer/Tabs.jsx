import React from "react";
import { Tabs as AntdTabs, Col } from "antd";

const TabPane = AntdTabs.TabPane;


class Tabs extends React.Component {

  render() {
    const { width = 24, offset = 0, tabs = [] } = this.props;

    return (
      <Col md={width} offset={offset}>
        <AntdTabs>
          {
            tabs.map(({ title, key, children = [] }) => (
              <TabPane tab={title} key={key}>
                {children.map(child => this.props.renderComponent(child))}
              </TabPane>
            ))
          }
        </AntdTabs>
      </Col>
    );
  }
}


export default Tabs;
