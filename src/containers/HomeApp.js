/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Home from "components/Home";

export class HomeApp extends Component {
  props: {
    loadFromWebsite: Function,
    loadFromFakeSecureSite: Function,
    website1data: Array<Object>,
    fakesecuresite2data: Array<Object>
  };

  render () {
    const {
      website1data,
      fakesecuresite2data
    } = this.props;

    return (
      <div>
        <Helmet title="Home"/>
        <Home
          website1data={website1data}
          fakesecuresite2data={fakesecuresite2data}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    website1data: state.website1data,
    fakesecuresite2data: state.fakesecuresite2data
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(HomeApp);

