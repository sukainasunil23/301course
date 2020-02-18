
import React from "react";
import { shallow } from "../../../enzyme";
import GiftsList from "./GiftsList";

describe("GiftsList", () => {
  let wrapper, props;

  props = {
    giftCardsFiltered: [],
    classes: {
      root: "root"
    }
  };
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props} />);
    expect(wrapper).toBeTruthy();
  });
  
});