import React from 'react';
import { shallow } from '../../../enzyme';
import { GiftsListContainer } from './GiftsListContainer';

let props = {
  classes: {
    root: 'root'
  },
  giftCards: [],
  fetchCards: jest.fn()
};
it('should render GiftsListContainer', () => {
  let wrapper = shallow(<GiftsListContainer {...props} />);
  expect(wrapper).toBeTruthy();
});