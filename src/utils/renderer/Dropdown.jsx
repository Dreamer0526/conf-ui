import React from "react";
import { FormattedMessage } from "react-intl";
import { Col, Button, Icon, Menu, Dropdown as AntdDropdown } from "antd";


class Dropdown extends React.Component {

  state = {
    selectedKey: ""
  }

  componentWillMount() {
    const { defaultSelectedKey = "" } = this.props;
    this.setState({ selectedKey: defaultSelectedKey });
  }

  handleSelect(target) {
    this.setState({ selectedKey: target.key });
  }

  renderOptions() {
    const { options = [], events = {} } = this.props;

    return (
      <Menu {...this.props.registerEvents(events)}>
        {options.map(option => {
          const { key, textId } = option;

          return (
            <Menu.Item key={key} onClick={this.handleSelect.bind(this)}>
              <FormattedMessage
                id={textId}
                defaultMessage={textId}
              />
            </Menu.Item>
          );
        })}
      </Menu>
    )
  }

  findSelectedLabel() {
    const { selectedKey } = this.state;
    if (!selectedKey) return;

    const { options = [] } = this.props;
    const { textId } = options.find(option => option.key === selectedKey);
    return <FormattedMessage
      id={textId}
      defaultMessage={textId}
    />;
  }

  render() {
    const { width = 6, offset = 0, title = "" } = this.props;
    const options = this.renderOptions();

    return (
      <Col md={width} offset={offset}>
        <AntdDropdown overlay={options}>
          <Button>
            {this.findSelectedLabel() || title}
            <Icon type="down" />
          </Button>
        </AntdDropdown>
      </Col>
    );
  }
}


export default Dropdown;
