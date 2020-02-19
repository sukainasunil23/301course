import React from 'react';
import { shallow } from '../../../enzyme';
import { GiftsSend, styles } from './GiftsSend';

describe('GiftsSend component testing', () => {
  let wrapper, props;

  props = {
    data: [],
    classes: {
      root: 'root'
    }
  };
  it('should render GiftSend', () => {
    wrapper = shallow(<GiftsSend {...props} styles={styles} />);
    expect(wrapper).toBeTruthy();
  });
});