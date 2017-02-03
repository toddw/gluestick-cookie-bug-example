/* @flow */
import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import MasterLayout from "components/MasterLayout";
import HomeApp from "containers/HomeApp";
import Website1App from "containers/Website1App";
import Website2App from "containers/Website2App";
import NoMatchApp from "containers/NoMatchApp";

export default function routes (/*store: Object, httpClient: Object*/) {
  return (
    <Route name="app" component={MasterLayout} path="/">
      <IndexRoute name="home" component={HomeApp} />
      <Route path="/request-from-website1" component={Website1App} />
      <Route path="/request-from-website2" component={Website2App} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp}/>
    </Route>
  );
}

