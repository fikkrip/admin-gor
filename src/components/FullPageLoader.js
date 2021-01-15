import React, { Component } from "react";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import GridLoader from "react-spinners/GridLoader";

const bar = css`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const sync = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

class FullPageLoader extends Component {
  render() {
    const { loading } = this.props;
    if (!loading) return null;

    return (
      <div>
        <BarLoader css={bar} size={50} color={"#479387"} loading={loading} />

        <GridLoader
          css={sync}
          size={15}
          margin={2}
          color={"#479387"}
          loading={loading}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading } = state.loader;
  return {
    loading,
  };
}

export default connect(mapStateToProps)(FullPageLoader);
