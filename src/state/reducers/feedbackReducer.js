// import * as ACTION from "../../metadata/actionTypes";

const origin = {
  useCases: {
    msgCount: 0,
    valueChart: {
      mainSeries: [
        [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],
        [25, 50, 75, 100, 125, 150, 200, 224, 250, 275]
      ],

      tooltipSeries: {
        0: {
          0: [
            [56, 77, 90, 108, 112, 120, 132, 101, 134, 90, 230, 210],
            [150, 156, 176, 190, 183, 220, 182, 191, 234, 290, 330, 310],
            [51, 68, 90, 87, 100, 120, 132, 101, 94, 110, 130, 180]
          ],
          1: [
            [1, 2, 0, 18, 12, 20, 32, 11, 34, 9, 23, 21],
            [15, 16, 17, 19, 18, 22, 18, 19, 23, 29, 33, 31],
            [5, 6, 9, 8, 10, 12, 13, 10, 9, 11, 13, 18]
          ]
          // ...
        },

        1: {
          0: [
            [56, 77, 90, 108, 112, 120, 132, 101, 134, 90, 230, 210],
            [150, 156, 176, 190, 183, 220, 182, 191, 234, 290, 330, 310],
            [51, 68, 90, 87, 100, 120, 132, 101, 94, 110, 130, 180]
          ],
          1: [
            [1, 2, 0, 18, 12, 20, 32, 11, 34, 9, 23, 21],
            [15, 16, 17, 19, 18, 22, 18, 19, 23, 29, 33, 31],
            [5, 6, 9, 8, 10, 12, 13, 10, 9, 11, 13, 18]
          ]
          // ...
        }
      },

      collapseSeries: {
        0: {
          0: [
            [56, 77, 90, 108, 112, 120, 132, 101, 134, 90, 230, 210],
            [51, 68, 90, 87, 100, 120, 132, 101, 94, 110, 130, 180]
          ],
          1: [
            [1, 2, 0, 18, 12, 20, 32, 11, 34, 9, 23, 21],
            [5, 6, 9, 8, 10, 12, 13, 10, 9, 11, 13, 18]
          ]
          // ...
        },

        1: {
          0: [
            [56, 77, 90, 108, 112, 120, 132, 101, 134, 90, 230, 210],
            [51, 68, 90, 87, 100, 120, 132, 101, 94, 110, 130, 180]
          ],
          1: [
            [1, 2, 0, 18, 12, 20, 32, 11, 34, 9, 23, 21],
            [5, 6, 9, 8, 10, 12, 13, 10, 9, 11, 13, 18]
          ]
          // ...
        }
      }
    }
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
