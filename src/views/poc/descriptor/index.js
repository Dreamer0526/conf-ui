import * as COMPONENT from "../../../metadata/componentTypes";

import { card_week_totle_leads, card_leads_dist_rate, card_vip_cust_rate, card_aum_imp_est } from "./pocCards";
import { chart_curr_dist_overview } from "./chart";
import { title } from "./title";

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

const titleField = title("下发线索汇总");

export default [
  headerField,
  {
    type: COMPONENT.LAYOUT,
    cssFor: "dbl-margin-top",
    width: 20,
    offset: 2,
    children: [
      titleField,
      card_week_totle_leads,
      card_leads_dist_rate,
      card_vip_cust_rate,
      card_aum_imp_est,
      chart_curr_dist_overview
    ]
  }
];