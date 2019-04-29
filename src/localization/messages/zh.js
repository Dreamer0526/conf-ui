const messages_ZH = {
  feedback: {
    header: "线索执行反馈",
    userName: "Caskal Yang",
    userCases: {
      title: "用例"
    },
    branches: {
      title: "分行"
    },
    custGroups: {
      title: "客群"
    }
  },
  poc: {
    header: "智能大脑下发报告",
    title: "下发线索汇总",

    card: {
      header1: "本周总线索数",
      header2: "线索下发率",
      header3: "大客户覆盖率",
      header4: "预估提升AUM",

      body1: "{week_total_leads}",
      body2: "{leads_dist_rate}",
      body3: "{vip_cust_rate}",
      body4: "{aum_imp_est}",

      footer2: "共下发条数: {total_dist_num}",
    },

    chart: {
      title: "本次下发概况",
      xAxis: ['输入线索总数', '上周联系滤除', '三月免打扰', '合并超限滤除', '数据一致性滤除', '普通超限线索', '无维护人超限线索', '合并下发数', '下发客户数']
    }
  }
};

export default messages_ZH;