import * as COMPONENT from "../../../constants/componentTypes";
import { title } from "../../../fields/texts";

const dateField = { type: COMPONENT.TEXT, textId: "2019/03/04 - 2019/03/10" };
const radioField = {
  type: COMPONENT.BUTTON_RADIO,
  width: 24,
  cssFor: "text-right",
  events: {
    onChange: "button radio action"
  },
  defaultSelectedKey: "leadValue",
  options: [{
    key: "leadValue",
    textId: "buttonLabels.leadValue"
  }, {
    key: "execConversion",
    textId: "buttonLabels.execConversion"
  }]
};


const userCasesDescriptor = [
  title("feedback.userCases.chartTitle", dateField),
  radioField
];

export default userCasesDescriptor;