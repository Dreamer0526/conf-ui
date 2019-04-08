import { card } from "../../../metadata/descriptors/card";
import * as COMPONENT_TYPE from "../../../metadata/componentTypes";


const header = [{
  type: COMPONENT_TYPE.ICON,
  text: "arch"
}, {
  type: COMPONENT_TYPE.TEXT,
  text: "线索下发率"
}];

const body = [{
  type: COMPONENT_TYPE.TEXT,
  text: "${v}",
  values: ["leads_dist_rate"]
}];

const footer = [{
  type: COMPONENT_TYPE.TEXT,
  text: "共下发条数: ${v}",
  values: ["total_dist_num"]
}];


export default card(header, body, footer);