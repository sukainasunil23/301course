import React from "react";
import { shallow } from "../../../enzyme";
import { Login } from "./Login";

let props = {
  //   e: {
  //     preventDefault: jest.fn()
  //   }
  classes: {
      paper: "paper"
  },
  login: jest.fn()
};
it("should render Login", () => {
  let wrapper = shallow(<Login {...props} />);
  expect(wrapper).toBeTruthy();
});

it("should trigger onSubmit on click ", () => {
  let wrapper = shallow(<Login {...props} />);
  wrapper.find("#submit").simulate("click", { preventDefault: () => {} });
});