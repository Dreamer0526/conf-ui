import { card } from "../../../descriptors/card";
import * as COMPONENT from "../../../constants/componentTypes";


export const card_week_totle_leads = card({
  header: [
    {
      type: COMPONENT.ICON,
      icon: "arch"
    }, {
      type: COMPONENT.TEXT,
      textId: "card.header1"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card.body1",
    }
  ],
});

export const card_leads_dist_rate = card({
  header: [
    {
      type: COMPONENT.ICON,
      icon: "arch"
    }, {
      type: COMPONENT.TEXT,
      textId: "card.header2"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card.body2"
    }
  ],
  footer: [
    {
      type: COMPONENT.TEXT,
      textId: "card.footer2"
    }
  ]
});

export const card_vip_cust_rate = card({
  header: [
    {
      type: COMPONENT.ICON,
      icon: "arch"
    }, {
      type: COMPONENT.TEXT,
      textId: "card.header3"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card.body3"
    }
  ]
});

export const card_aum_imp_est = card({
  header: [
    {
      type: COMPONENT.ICON,
      icon: "arch"
    }, {
      type: COMPONENT.TEXT,
      textId: "card.header4"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card.body4"
    }
  ]
});
