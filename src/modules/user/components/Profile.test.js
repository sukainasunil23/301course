import React from 'react';
import { shallow } from '../../../enzyme';
import {Profile} from './Profile';

describe('Profile', () => {
  let wrapper, props;

  props = {
    detailsObject: {
      email: ''
    },
    data: [],
    classes: {
      root: 'root'
    }
  };
  it('should render Profile', () => {
    wrapper = shallow(<Profile {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it('should call onChange profile', () => {
    const onChange = jest.fn();
    const event = {
      preventDefault() {},
      target: { name:'email',value: 'the-value' }
    };
    const component = shallow(<Profile {...props} />);
    component.find('#email').simulate('change', event);
    expect(onChange).toBeTruthy();
  });
  it('should call onChange profile', () => {
    const onChange = jest.fn();
    const event = {
      preventDefault() {},
      target: { name:'name',value: 'the-value' }
    };
    const component = shallow(<Profile {...props} />);
    component.find('#name').simulate('change', event);
    expect(onChange).toBeTruthy();
  });
  it("should trigger home  click event", () => {
    const event = {
      preventDefault() {},
      target: { name:'name',value: 'the-value' }
    };
    wrapper = shallow(<Profile {...props} />);
    wrapper.find("#edit").simulate("click",event);
  });
});