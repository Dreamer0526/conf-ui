import React from "react";
import PageRenderer from "../../utils/renderer/PageRenderer";

import descriptor from "./descriptor";


class Feedback extends React.Component {
  render() {
    return (
      <PageRenderer
        descriptor={descriptor}
      />
    );
  }
}

export default Feedback;
