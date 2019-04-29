import React from "react";
import { connect } from "react-redux";

import PageRenderer from "../../utils/renderer/PageRenderer";

import descriptor from "./descriptor";


class Feedback extends React.Component {
  render() {
    return (
      <PageRenderer
        data={this.props.data}
        descriptor={descriptor}
      />
    );
  }
}

const mapStateToProps = state => state.feedback;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
