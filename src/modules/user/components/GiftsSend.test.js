import React from 'react';
import { shallow } from '../../../enzyme';
import { GiftsSend, styles } from './GiftsSend';

describe('GiftsSend component testing', () => {
  let wrapper, props;

  props = {
    data: [
      {id: "1"}
    ],
    classes: {
      root: 'root'
    }
  };
  it('should render GiftSend', () => {
    wrapper = shallow(<GiftsSend {...props} styles={styles} />);
    expect(wrapper).toBeTruthy();
  });
  it("styles", () => {
    expect(styles({spacing:{unit:10}})).toBeTruthy();
  });
});