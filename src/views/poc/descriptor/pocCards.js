import { card } from "../../../descriptors/card";
import * as COMPONENT from "../../../metadata/componentTypes";


export const card_week_totle_leads = card({
  header: [
    {
      type: COMPONENT.ICON,
      text: "arch"
    }, {
      type: COMPONENT.TEXT,
      text: "本周总线索数"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      text: "%{v}",
      values: ["week_totle_leads"]
    }
  ],
});

export const card_leads_dist_rate = card({
  header: [
    {
      type: COMPONENT.ICON,
      text: "arch"
    }, {
      type: COMPONENT.TEXT,
      text: "线索下发率"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      text: "%{v}",
      values: ["leads_dist_rate"]
    }
  ],
  footer: [
    {
      type: COMPONENT.TEXT,
      text: "共下发条数: %{v}",
      values: ["total_dist_num"]
    }
  ]
});

export const card_vip_cust_rate = card({
  header: [
    {
      type: COMPONENT.ICON,
      text: "arch"
    }, {
      type: COMPONENT.TEXT,
      text: "大有客户覆盖率"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      text: "%{v}",
      values: ["vip_cust_rate"]
    }
  ]
});

export const card_aum_imp_est = card({
  header: [
    {
      type: COMPONENT.ICON,
      text: "arch"
    }, {
      type: COMPONENT.TEXT,
      text: "预估提升AUM"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      text: "%{v}",
      values: ["aum_imp_est"]
    }
  ]
});
