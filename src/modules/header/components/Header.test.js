import React from 'react';
import { shallow } from '../../../enzyme';
import { Header } from './Header'
import { mapStateToProps, mapDispatchToProps } from './Header'

describe('Header test', ()=>{
    let wrapper, props;
    beforeEach(()=>{
        props = {
            classes : {
                root : 'root',
                toolbar : 'toolbar',
                grow : 'grow'
            },
            isLoggedIn : true
        };
        wrapper = shallow(<Header {...props}/>);
    })
    it('component should render', ()=>{
        expect(wrapper).toBeTruthy();
    }) 

    it('should map state to props when user is not logged in', () => {
        const initialState = {
          login: {
            loginStatus: undefined,
            detailsObject: undefined
          }
        };
        expect(mapStateToProps(initialState).detailsObject).toEqual(undefined);
      });

    it('should call mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).logout();
    });

    it('YOYOGift button clicked', ()=>{
        const wrapper = shallow(<Header {...props}/>)
        wrapper.find('#YOYOGift').simulate('click');
    })

    it('send gift button clicked', ()=>{
        const wrapper = shallow(<Header {...props}/>)
        wrapper.find('#sent').simulate('click');
    })

    it('receive gift button clicked', ()=>{
        const wrapper = shallow(<Header {...props}/>)
        wrapper.find('#receive').simulate('click');
    })

    it('profile button clicked', ()=>{
        const wrapper = shallow(<Header {...props}/>)
        wrapper.find('#profile').simulate('click');
    })

    it('log out button clicked', ()=>{
        const wrapper = shallow(<Header logout={jest.fn()} {...props}/>)
        wrapper.find('#logging').simulate('click');
    })

    it('log in button clicked', ()=>{
        const props = {
            classes : {
                root : 'root',
                toolbar : 'toolbar',
                grow : 'grow'
            },
            isLoggedIn : false
        };
        const wrapper = shallow(<Header {...props}/>)
        wrapper.find('#logging').simulate('click');
    })
})