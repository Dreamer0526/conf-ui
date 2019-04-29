import React from "react";
import { Menu as AntdMenu } from "antd";

const { Item } = AntdMenu;
class Menu extends React.Component {

  render() {
    const { options = [], mode = "vertical" } = this.props;

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


export default Menu;
