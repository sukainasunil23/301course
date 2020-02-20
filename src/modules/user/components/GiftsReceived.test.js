import React from 'react';
import { shallow } from '../../../enzyme';
import { GiftsReceived, styles } from './GiftsReceived';

describe('GiftsReceived component testing', () => {
  let wrapper, props;

  props = {
    data: [
      {
        id:"1",
        isRedeemed: false
      },
      {
        id:"2",
        isRedeemed: true
      }
    ],
    classes: {
      root: 'root'
    },
    redeemCard: jest.fn()
  };
  it('should render GiftReceived', () => {
    wrapper = shallow(<GiftsReceived {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it("styles", () => {
    expect(styles({spacing:{unit:10}})).toBeTruthy();
  });
});