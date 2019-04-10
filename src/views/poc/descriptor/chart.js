import * as COMPONENT from "../../../constants/componentTypes";

import { title } from "./title";


const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
  },

  xAxis: [
    {
      type: 'category',
      axisLabel: {
        interval: 0,
        fontSize: 12,
      },
      axisTick: {
        show: false
      },
      data: ['输入线索总数', '上周联系滤除', '三月免打扰', '合并超限滤除', '数据一致性滤除', '普通超限线索', '无维护人超限线索', '合并下发数', '下发客户数']
    }

  ],
  yAxis: [
    {
      show: false
    },
  ],

  series: [
    {
      name: '辅助',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        normal: {
          barBorderColor: 'none',
          color: 'none'
        }
      },
      data: [
        "chart.total_leads_num_aux",
        "chart.contact_num_aux",
        "chart.reject_num_aux",
        "chart.merge_filter_num_aux",
        "chart.other_num_aux",
        "chart.unallocate_fm_aux",
        "chart.unallocate_org_aux",
        "chart.dist_merge_leads_aux",
        "chart.dist_cust_aux"
      ]
    },
    {
      name: '线索数',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 10,
        }
      },
      data: [
        "chart.total_leads_num",
        "chart.contact_num",
        "chart.reject_num",
        "chart.merge_filter_num",
        "chart.other_num",
        "chart.unallocate_fm",
        "chart.unallocate_org",
        "chart.dist_merge_leads",
        "chart.dist_cust"
      ]
    }
  ]
};


export const chart_curr_dist_overview = {
  type: COMPONENT.CARD,
  width: 22,
  children: [
    {
      width: 6,
      offset: 1,
      cssFor: "text-left",
      children: [
        title("chart__title")
      ]
    }, {
      width: 24,
      children: [{
        type: COMPONENT.CHART,
        option
      }]
    }
  ]
};