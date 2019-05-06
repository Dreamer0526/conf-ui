// import * as ACTION from "../../metadata/actionTypes";

const origin = {
  userCases: {
    msgCount: 0,
    valueChartSeries1: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],
    valueChartSeries2: [25, 50, 75, 100, 125, 150, 200, 224, 250, 275]
  },
  branches: {
    msgCount: 1
  },
  custGroups: {
    msgCount: 2
  }
};

const feedbackReducer = (state = origin, action) => {
  return state;
}

export default feedbackReducer;
