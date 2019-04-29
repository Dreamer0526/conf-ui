import * as COMPONENT from "../../../constants/componentTypes";

import { card_week_totle_leads, card_leads_dist_rate, card_vip_cust_rate, card_aum_imp_est } from "./_pocCards";
import { dropdown_language, dropdowm_theme } from "./_dropdown";
import { chart_curr_dist_overview } from "./_pocChart";
import { title } from "./_layouts";

const headerField = {
  type: COMPONENT.LAYOUT,
  cssFor: "poc-top-layout",
  width: 24,
  children: [
    {
      type: COMPONENT.LAYOUT,
      width: 11,
      offset: 1,
      children: [
        {
          type: COMPONENT.ICON,
          icon: "cycle"
        },
        {
          type: COMPONENT.TEXT,
          textId: "poc.header"
        }
      ]
    },
    dropdowm_theme,
    dropdown_language
  ]
}

const titleField = title("poc.title");

const tableField = {
  type: COMPONENT.LAYOUT,
  width: 23,
  cssFor: "poc-card",
  children: [
    {
      type: COMPONENT.TABLE,
      columns: [{
        title: "",
        dataIndex: "firstCol",
        key: "firstCol"
      },
      {
        title: "私人银行",
        dataIndex: "personalBank",
        key: "personalBank",
      }, {
        title: "钻石",
        dataIndex: "diamond",
        key: "diamond"
      }, {
        title: "信用卡",
        dataIndex: "creditCard",
        key: "creditCard"
      }],
      data: []
    }
  ]
}

export default [
  headerField,
  {
    type: COMPONENT.LAYOUT,
    cssFor: "dbl-margin-top",
    width: 20,
    offset: 2,
    children: [
      titleField,
      { ...card_week_totle_leads, offset: 0 },
      card_leads_dist_rate,
      card_vip_cust_rate,
      card_aum_imp_est,
      chart_curr_dist_overview,
      tableField
    ]
  }
];