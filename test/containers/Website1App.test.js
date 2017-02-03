import React from "react";
import { shallow } from "enzyme";

import { Website1App } from "containers/Website1App";

describe("containers/Website1App", () => {
  it("renders without an issue", () => {
    const subject = <Website1App />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
