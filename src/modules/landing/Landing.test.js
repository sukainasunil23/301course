import React from "react";
import { shallow } from "../../enzyme";
import Landing from "./Landing";

it("should render Landing", () => {
  let wrapper = shallow(<Landing />);
  expect(wrapper).toBeTruthy();
});