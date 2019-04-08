import { card } from "../../../metadata/descriptors/card";
import { text, button, icon } from "../../../metadata/descriptors/basics";


const header = [{
  ...icon
}, {
  ...text,
  width: 22,
  text: "This is header of card"
}];

const body = [{
  ...text,
  width: 24,
  text: "Sdafwefd azdfs. Lsddsf had fhadjsklf, lkasdfhadb adsf."
}];

const footer = [{
  ...button,
  label: "Cancel"
}, {
  ...button,
  label: "Submit"
}];


export default card({
  header, body, footer
});