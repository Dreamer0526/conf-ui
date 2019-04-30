import React from "react";
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";
import { Col, Icon, Menu, Dropdown as AntdDropdown } from "antd";


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
    const { options, events } = this.props;

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

    const { options } = this.props;
    const { textId } = options.find(option => option.key === selectedKey);
    return <FormattedMessage
      id={textId}
      defaultMessage={textId}
    />;
  }

  render() {
    const { width, offset, textId } = this.props;
    const options = this.renderOptions();

    const title = textId ? (
      <FormattedMessage id={textId} defaultMessage={textId} />
    ) : this.findSelectedLabel();

    return (
      <Col xs={width} offset={offset}>
        <AntdDropdown overlay={options}>
          <div>
            {title} <Icon type="down" />
          </div>
        </AntdDropdown>
      </Col>
    );
  }
}


Dropdown.propTypes = {
  options: PropTypes.array,
  textId: PropTypes.string,
  offset: PropTypes.number,
  width: PropTypes.number,
  events: PropTypes.object
}

Dropdown.defaultProps = {
  options: [],
  textId: "",
  offset: 0,
  width: 6,
  events: {}
}

export default Dropdown;
