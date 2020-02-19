import React from 'react';
import { shallow } from '../../../enzyme';
import Profile from './Profile';

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
  
});