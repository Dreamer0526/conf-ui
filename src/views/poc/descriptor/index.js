import * as COMPONENT from "../../../metadata/componentTypes";

import { week_totle_leads_card, leads_dist_rate_card, vip_cust_rate_card, aum_imp_est_card } from "./pocCards";

export default [
  {
    type: COMPONENT.LAYOUT,
    width: 20,
    offset: 2,
    children: [week_totle_leads_card, leads_dist_rate_card, vip_cust_rate_card, aum_imp_est_card]
  }
];