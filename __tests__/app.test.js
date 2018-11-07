import React from "react";
import { shallow } from "enzyme";
import App from "views/App.js";

describe("<App/>", () => {
  it("shallow renders without crashing", () => {
    const wrapper = shallow(<App />);
  });
});
