import { card } from "../../../descriptors/card";
import * as COMPONENT from "../../../metadata/componentTypes";


const header = [{
  type: COMPONENT.ICON,
  text: "arch"
}, {
  type: COMPONENT.TEXT,
  text: "线索下发率"
}];

const body = [{
  type: COMPONENT.TEXT,
  text: "%{v}",
  values: ["leads_dist_rate"]
}];

const footer = [{
  type: COMPONENT.TEXT,
  text: "共下发条数: %{v}",
  values: ["total_dist_num"]
}];

export default [
  {
    type: COMPONENT.TABS,
    innerWidth: 20,
    innerOffset: 2,
    tabs: [
      {
        key: "home",
        title: "home",
        children: [card(header, body, footer)]
      },
      {
        key: "profile",
        title: "profile",
        children: footer
      }
    ]
  }
]