import * as COMPONENT_TYPE from "../componentTypes";


/**
 * card component can be passed in 1 to 3 params
 * if 1 param is given, it will be rendered as body
 * if 2 params are given, they will be rendered as header as body in sequence
 * if 3 params are given, they will be rendered as header, body and footer  
 */
export const card = ({ header, body, footer }) => ([{
  type: COMPONENT_TYPE.CARD,
  width: 6,
  children: [
    {
      width: 24,
      children: header
    }, {
      width: 24,
      children: body
    }, {
      width: 24,
      children: footer
    }
  ]
}]);