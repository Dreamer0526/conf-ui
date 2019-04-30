import React from "react";
import PropTypes from 'prop-types';
import { Menu as AntdMenu } from "antd";

const { Item } = AntdMenu;
class Menu extends React.Component {

  render() {
    const { options, mode } = this.props;

    return (
      <AntdMenu mode={mode} theme="dark">
        {
          options.map(({ key, label }) => (
            <Item key={`menu-item-${key}`}>
              {label}
            </Item>
          ))
        }
      </AntdMenu>
    );
  }
}


Menu.propTypes = {
  options: PropTypes.array,
  mode: PropTypes.string
};

Menu.defaultProps = {
  options: [],
  mode: "vertical"
};

export default Menu;
