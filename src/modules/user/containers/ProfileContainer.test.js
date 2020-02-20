import React from 'react';
import { shallow } from '../../../enzyme';
import { ProfileContainer,  mapStateToProps} from './ProfileContainer.js';
import Profile from '../components/Profile';
import { Redirect } from 'react-router-dom';

describe('ProfileContainers testing', () => {
    let wrapper, props;
  
    props = {
        user:{
            balance_point: 'balance_point'
        },
        isLoggedIn: true,
        userDetails: jest.fn(),
        detailsObject: {
            id: 'id'
        }
    };
    it('should redirect to home page if the user is not logged in', () => {
        const prop ={
            ...props,
            isLoggedIn: false
        };
        wrapper = shallow(<ProfileContainer {...prop} />);
        expect(wrapper.find(Redirect)).toHaveLength(1);
    });
    it('should render Profile if user is logged in',()=>{
        wrapper = shallow(<ProfileContainer {...props} />);
        expect(wrapper.find(Profile)).toHaveLength(1);
    });
    it('should map state to props', () => {
        const initialState = {
          login: {
            loginStatus: true,
            detailsObject: {}
          },
          users: {
            userDetails:[]
          }
        };
        expect(mapStateToProps(initialState)).toEqual({
          isLoggedIn: true,
          detailsObject: {}
        });
      });
  });