import React from "react";
import { Menu as AntdMenu } from "antd";

const { SubMenu, Item } = AntdMenu;
class Menu extends React.Component {

  render() {
    const { structure = [], mode = "vertical" } = this.props;

    return (
      <AntdMenu mode={mode}>
        {structure.map((item, index) => {
          const { title = "", options = [] } = item;

          return (
            <SubMenu key={`submenu-${index}`} title={title}>
              {options.map(
                ({ key, label, events = {} }) =>
                  <Item key={key} {...this.props.registerEvents(events)} >
                    {label}
                  </Item>
              )}
            </SubMenu>
          );
        })}
      </AntdMenu>
    );
  }
}


export default Menu;
