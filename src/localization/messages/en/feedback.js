export default {
  header: "Leads Feedback",
  userName: "Caskal Yang",

  useCases: {
    title: "User Cases",
    chartTitle: "Use cases performance",
    insightTitle: "Intelligent insights",

    mainX: ["Platinum criticality", "Wealthy family", "Financing expires", "VIPs fall back", "High potential", "Loss warning", "Wage generation", "MGM", "Pure cross", "Insurance marketing"],
    mainY1: {
      leadValue: "Average value (ten thousand yuan)",
      execConversion: "Conversion rate"
    },
    mainY2: {
      leadValue: "Total value of clues (million yuan)",
      execConversion: "Exacutive rate"
    },
    mainSeries: {
      leadValue: ["Average value", "Total value of clues"],
      execConversion: ["Conversion rate", "Exacutive rate"]
    },

    tooltipTitle: "{category} - Recent use cases {series} changes",
    tooltipX: ["Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    tooltipY: "Average value (ten thousand yuan)",
    tooltipSeries: ["High-potential improvement use case", "Highest value use case", "Lowest value use case"],

    collapseTitle: "{category} use case execution and comparison",
    collapseX: ["Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    collapseY: "Average value (ten thousand yuan)",
    collapseSeries: ["Average AUM change - Executive group", "Average AUM change - Control group"],

  },
  branches: {
    title: "Branch Banks"
  },
  custGroups: {
    title: "Customer Groups"
  }
};