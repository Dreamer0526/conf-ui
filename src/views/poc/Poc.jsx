import React from "react";
import { connect } from "react-redux";

import PageRenderer from "../page-renderer/PageRenderer";

import descriptor from "./descriptor";


class POC extends React.Component {
  render() {
    return (
      <PageRenderer
        data={this.props.data}
        descriptor={descriptor}
      />
    );
  }
}

const mapStateToProps = state => state.poc;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(POC);
