import React from 'react';
import { shallow } from '../../../enzyme';
import { GiftsSendContainer, mapStateToProps } from './GiftsSendContainer.js';
import GiftsSend from '../components/GiftsSend.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

describe('GiftsSendContainer testing', () => {
    let wrapper, props;
  
    props = {
      user: 'user',
      isLoggedIn: true,
      sentCards: [],
      fetchSentCards: jest.fn(),
      redeemCard: jest.fn('test','test')
    };
    it('should render GiftsSendContainer', () => {
      wrapper = shallow(<GiftsSendContainer {...props} />);
      expect(wrapper).toBeTruthy();
    });
    it('should render GiftsSend if SendCards are not empty', () => {
        const prop ={
            ...props,
            sentCards: ['SendCards']
        };
        wrapper = shallow(<GiftsSendContainer {...prop} />);
        expect(wrapper.find(GiftsSend)).toHaveLength(1);
    });
    it('should render CircularProgress if SendCards is not passed',()=>{
        const prop ={
            ...props,
            sentCards: false
        };
        wrapper = shallow(<GiftsSendContainer {...prop} />);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
    it('should redirect to home page if the user is not logged in', () => {
      const prop ={
          ...props,
          isLoggedIn: false
      };
      wrapper = shallow(<GiftsSendContainer {...prop} />);
      expect(wrapper.find(Redirect)).toHaveLength(1);
    });
    it('should map state to props', () => {
      const initialState = {
        login: {
          loginStatus: true,
          detailsObject: {}
        },
        users: {
          cards: []
        }
      };
      expect(mapStateToProps(initialState)).toEqual({
        user: {},
        isLoggedIn: true,
        sentCards: []
      });
    });
  });