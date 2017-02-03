import React from "react";
import { shallow } from "enzyme";

import { Website2App } from "containers/Website2App";

describe("containers/Website2App", () => {
  it("renders without an issue", () => {
    const subject = <Website2App />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
