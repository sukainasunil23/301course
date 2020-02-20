import React from 'react';
import { shallow } from '../../../enzyme';
import { GiftsReceivedContainer, mapStateToProps } from './GiftsReceivedContainer';
import GiftsReceived from '../components/GiftsReceived';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

describe('GiftsReceivedContainer testing', () => {
    let wrapper, props;
  
    props = {
      user: 'user',
      isLoggedIn: true,
      receivedCards: [],
      fetchReceivedCards: jest.fn(),
      redeemCard: jest.fn()
    };
    it('should render GiftsReceivedContainer', () => {
      wrapper = shallow(<GiftsReceivedContainer {...props} />);
      expect(wrapper).toBeTruthy();
    });
    it('should render GiftsReceived if receivedCards are not empty', () => {
        const prop ={
            ...props,
            receivedCards: ['receivedCards']
        };
        wrapper = shallow(<GiftsReceivedContainer {...prop} />);
        expect(wrapper.find(GiftsReceived)).toHaveLength(1);
    });
    it('should render CircularProgress if receivedCards is not passed',()=>{
        const prop ={
            ...props,
            receivedCards: false
        };
        wrapper = shallow(<GiftsReceivedContainer {...prop} />);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
    it('should redirect to home page if the user is not logged in', () => {
      const prop ={
          ...props,
          isLoggedIn: false
      };
      wrapper = shallow(<GiftsReceivedContainer {...prop} />);
      expect(wrapper.find(Redirect)).toHaveLength(1);
    });
    it('should map state to props', () => {
      const initialState = {
        login: {
          loginStatus: false,
          detailsObject: {}
        },
        users: {
          cards: []
        }
      };
      expect(mapStateToProps(initialState).loginStatus).toBe(undefined);
    });
    it('redeem card', () => {
      const row ={
        id: "id"
      }
      wrapper = shallow(<GiftsReceivedContainer {...props} />);
      wrapper.instance().handleRedeemCard(row)
    });
  });