import { card } from "../../../descriptors/card";
import * as COMPONENT from "../../../constants/componentTypes";


export const card_week_totle_leads = card({
  header: [
    {
      type: COMPONENT.ICON,
      icon: "arch"
    }, {
      type: COMPONENT.TEXT,
      textId: "card__header_1"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card__body_1",
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
      textId: "card__header_2"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card__body_2"
    }
  ],
  footer: [
    {
      type: COMPONENT.TEXT,
      textId: "card__footer_2"
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
      textId: "card__header_3"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card__body_3"
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
      textId: "card__header_4"
    }
  ],
  body: [
    {
      type: COMPONENT.TEXT,
      textId: "card__body_4"
    }
  ]
});
