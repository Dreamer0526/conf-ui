import React from "react";
import { Tabs as AntdTabs, Col } from "antd";

const { TabPane } = AntdTabs;


class Tabs extends React.Component {

  renderTitle(title) {
    if (title.constructor instanceof Object && title.type) {
      return this.props.renderComponent(title);
    }

    return title;
  }

  render() {
    const { width = 24, offset = 0, tabs = [] } = this.props;

    return (
      <Col md={width} offset={offset} className="tabs-container">
        <AntdTabs type="card">
          {
            tabs.map(({ title, key, children = [] }) => (
              <TabPane key={key}
                tab={this.renderTitle(title)}
              >
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
