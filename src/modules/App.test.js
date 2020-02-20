import React from "react";
import { shallow } from "../enzyme";
import App, { Loading } from "./App";

it("should render App", () => {
  let wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

let loadingProp = {
  error: {}
};
let loadingProp2 = {};
it("should render Loading", () => {
  let wrapper = shallow(<Loading {...loadingProp} />);
  expect(wrapper).toBeTruthy();
});
it("should render Loading", () => {
  let wrapper = shallow(<Loading {...loadingProp2} />);
  expect(wrapper).toBeTruthy();
});

