import React from 'react';
import { shallow } from '../../../enzyme';
import GiftShow from './GiftShow';

describe('Show gift test', () => {
    let props, wrapper;
    beforeEach (() => {
        props = {
            data : {
                cardComments : ['cardComments']
            },
            getEmail: jest.fn()
        };
    });
    it('should render the GiftShow component', () => {
        wrapper = shallow(<GiftShow {...props}/>);
        expect(wrapper).toBeTruthy();
    });
    it('should show Loading user reviews if no cardcomments are loaded', ()=>{
        const props = {
            data : 'data'
        };
        wrapper = shallow(<GiftShow {...props}/>);
        expect(wrapper).toBeTruthy();
    });
})

