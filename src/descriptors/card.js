import { CARD } from "../constants/componentTypes";
import { TEST } from "../constants/actionTypes";

export const card = ({ header, body, footer }) => ({
  type: CARD,
  width: 5,
  offset: 1,
  // events: {
  //   onClick: TEST
  // },
  children: [
    {
      width: 24,
      children: header,
      cssFor: "card-header"
    }, {
      width: 24,
      children: body,
      cssFor: "card-body"
    }, {
      width: 24,
      children: footer,
      cssFor: "card-footer"
    }
  ]
});


export const cardField = {
  type: CARD,
  width: 5,
  offset: 1,
  events: {
    onClick: TEST,
  },
  children: [
    {
      width: 24,
      children: [
        // array of fields
      ],
      cssFor: "card-header"
    }, {
      width: 24,
      children: [
        // array of fields
      ],
      cssFor: "card-body"
    }, {
      width: 24,
      children: [
        // array of fields
      ],
      cssFor: "card-footer"
    }
  ]
};
