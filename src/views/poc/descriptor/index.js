import * as COMPONENT from "../../../metadata/componentTypes";

import { week_totle_leads_card, leads_dist_rate_card, vip_cust_rate_card, aum_imp_est_card } from "./pocCards";

const headerField = {
  type: COMPONENT.LAYOUT,
  cssFor: "poc-top-layout",
  width: 24,
  children: [
    {
      type: COMPONENT.ICON,
      text: "cycle"
    },
    {
      type: COMPONENT.TEXT,
      text: "智能大脑下发报告"
    }
  ]
};

const titleField = {
  type: COMPONENT.LAYOUT,
  cssFor: "poc-title",
  width: 24,
  children: [
    {
      type: COMPONENT.TEXT,
      cssFor: "font-18 base-margin-left",
      text: "下发线索汇总"
    }
  ]
}

export default [
  headerField,
  {
    type: COMPONENT.LAYOUT,
    width: 20,
    offset: 2,
    children: [titleField, week_totle_leads_card, leads_dist_rate_card, vip_cust_rate_card, aum_imp_est_card]
  }
];