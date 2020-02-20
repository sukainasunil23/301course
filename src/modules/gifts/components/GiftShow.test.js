import React from 'react';
import { shallow } from '../../../enzyme';
import GiftShow from './GiftShow';
import SendGiftCardDialog from '../../common/components/DraggableDialog';

describe('Show gift test', () => {
    let props, wrapper;
    beforeEach (() => {
        props = {
            data : {
                cardComments : ['cardComments']
            }
        };
    })
    it('should render the GiftShow component', () => {
        wrapper = shallow(<GiftShow {...props}/>);
        expect(wrapper).toBeTruthy();
    })
    it('should show Loading user reviews if no cardcomments are loaded', ()=>{
        const props = {
            data : 'data'
        };
        wrapper = shallow(<GiftShow {...props}/>);
        expect(wrapper).toBeTruthy();
    })
    it('should show Loading user reviews if no cardcomments are loaded', ()=>{
        wrapper = shallow(<GiftShow {...props}/>);
        expect(wrapper.find(SendGiftCardDialog)).toBeTruthy();
    })
})

