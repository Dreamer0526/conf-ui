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


export default card(header, body, footer);