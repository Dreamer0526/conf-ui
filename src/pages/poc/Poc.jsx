import React from "react";
import PageRenderer from "../../components/page-renderer/PageRenderer";

import descriptor from "./descriptor";


class POC extends React.Component {
  render() {
    return (
      <PageRenderer descriptor={descriptor} />
    );
  }
}

export default POC;