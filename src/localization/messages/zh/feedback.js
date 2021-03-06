export default {
  header: "线索执行反馈",
  userName: "Caskal Yang",

  useCases: {
    title: "用例",
    chartTitle: "所有用例执行参照对比",
    insightTitle: "反馈模型智能洞见",

    mainX: ["白金临界", "富裕家庭", "理财到期", "贵宾回落", "高潜提升", "流失预警", "工资代发", "MGM", "纯活交叉", "保险营销"],
    mainY1: {
      leadValue: "平均价值（万元）",
      execConversion: "转化率"
    },
    mainY2: {
      leadValue: "线索总价值（百万元）",
      execConversion: "执行率"
    },
    mainSeries: {
      leadValue: ["平均价值", "线索总价值"],
      execConversion: ["转化率", "执行率"]
    },

    tooltipTitle: "{category} - 近期用例{series}变化图",
    tooltipX: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"],
    tooltipY: "平均价值（万元）",
    tooltipSeries: ["高潜提升用例", "最高价值用例", "最低价值用例"],

    collapseTitle: "{category}用例执行与对照",
    collapseX: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月"],
    collapseY: "平均价值（万元）",
    collapseSeries: ["执行组平均AUM变动", "对照组平均AUM变动"],

  },
  branches: {
    title: "分行"
  },
  custGroups: {
    title: "客群",
    chartTitle: "所有客群执行参照对比",

    mainX: ["白金临界", "富裕家庭", "理财到期", "贵宾回落", "高潜提升", "流失预警", "工资代发", "MGM", "纯活交叉", "保险营销"],
    mainY: ["大众", "有效", "黄金", "白金", "钻石", "私行"],

    tooltipTitle: "{categoryY}客户 {categoryX}",
    tooltipX: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月"],
    tooltipY: "平均价值（万元）",
    tooltipSeries: ["未命名"],
  }
};