import * as COMPONENT from "../../../constants/componentTypes";

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
      icon: "cycle"
    },
    {
      type: COMPONENT.TEXT,
      textId: "header"
    }
  ]
};

const titleField = title("title");

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