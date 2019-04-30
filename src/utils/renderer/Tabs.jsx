import React from "react";
import PropTypes from 'prop-types';
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
    const { width, offset, tabs } = this.props;

    return (
      <Col xs={width} offset={offset} className="tabs-container">
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


Tabs.propTypes = {
  tabs: PropTypes.array,
  width: PropTypes.number,
  offset: PropTypes.number
}

Tabs.defaultProps = {
  tabs: [],
  width: 22,
  offset: 1
}

export default Tabs;
