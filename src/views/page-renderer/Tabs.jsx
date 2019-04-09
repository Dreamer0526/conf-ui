import React from "react";
import { Menu, Col } from "antd";


class Tabs extends React.Component {
  state = {
    activeTab: "",
  }

  componentDidMount() {
    // set default selected
    const { tabs = [] } = this.props;
    if (!tabs.length) return

    const { key } = tabs[0];
    this.setState({ activeTab: key });
  }

  handleClick(event) {
    const { key } = event;
    this.setState({ activeTab: key });
  }

  renderPanel() {
    const { activeTab } = this.state;
    const { tabs = [], innerWidth = 24, innerOffset = 0 } = this.props;

    const { children = [] } = tabs.find(item => item.key === activeTab) || {};

    return (
      <Col sm={innerWidth} offset={innerOffset}>
        {children.map(child => this.props.renderComponent(child))}
      </Col>
    );
  }

  render() {
    const { activeTab } = this.state;
    const { width = 24, offset = 0, tabs = [], mode = "horizontal" } = this.props;

    return (
      <Col sm={width} offset={offset}>
        <Menu
          defaultSelectedKeys={[activeTab]}
          onClick={this.handleClick.bind(this)}
          selectedKeys={[activeTab]}
          mode={mode}
        >
          {tabs.map(
            ({ key, title }) => <Menu.Item key={key}> {title} </Menu.Item>
          )}
        </Menu>

        {this.renderPanel()}
      </Col>
    );
  }
}


export default Tabs;
