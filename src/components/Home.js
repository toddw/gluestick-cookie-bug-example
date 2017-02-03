/* @flow */
import React, { Component } from "react";
import Radium from "radium";

export class Home extends Component {
  props: {
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
        <h2>The following tables show the cookies that were sent to the URLS</h2>
        <p>Using Chrome's Dev tools, clear all of your cookies, then click on one of the links below.</p>
        <p>You can then hit refresh to see that it now displays cookies for the domain that it sent a request to in order to render this page.</p>
        <p>Now click on the other link below, once that page loads hit refresh. You will see that the cookies end up getting merged together even though they were from two totally different domains</p>
        <p>The reason for this is explained here https://github.com/TrueCar/gluestick-shared/issues/21</p>
        <a href="/request-from-website1">Website 1</a> | <a href="/request-from-website2">Website 2</a>
        <table>
          <thead>
            <tr>
              <th>
                Website 1 Data <br />
              </th>
              <th>
                Fake Secure Site 2 Data<br />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.dataCell}>{website1data.map((d, i) => (<pre key={i}>{JSON.stringify(d)}</pre>))}</td>
              <td style={styles.dataCell}>{fakesecuresite2data.map((d, i) => (<pre key={i}>{JSON.stringify(d)}</pre>))}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Radium(Home);

const styles = {
  dataCell: {
    verticalAlign: "top",
    padding: 5,
    border: "1px solid #ccc"
  }
};

