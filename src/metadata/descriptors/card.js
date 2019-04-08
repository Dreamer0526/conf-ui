import { CARD } from "../componentTypes";

/**
 * card component can be passed in 1 to 3 params
 * if 1 param is given, it will be rendered as body
 * if 2 params are given, they will be rendered as header as body in sequence
 * if 3 params are given, they will be rendered as header, body and footer  
 */

export function card() {
  let header, body, footer;

  if (arguments.length === 1) {
    [body] = arguments;
  } else {
    [header, body, footer] = arguments;
  }

  const cardDescriptor = [{
    type: CARD,
    width: 6,
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
  }];

  return cardDescriptor;
}
