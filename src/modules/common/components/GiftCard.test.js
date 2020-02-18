import React from "react";
import { shallow} from "../../../enzyme";
import {GiftCard, styles} from './GiftCard'

describe("<GiftCard/>", () => {
  
    let wrapper;
    beforeEach(() => {
        let props={
            classes:{
                card:'card',
                avatar:'avatar',
                media:'media'
            },
            giftCard:{
                cardName:'cardName',
                id:'9',
                cardImage:"cardImage",
                cardCount:'cardCount',
                cardShortDesc:'cardShortDesc'
            },
            userEmail:"test@gmail.com"
        }
        wrapper = shallow(<GiftCard {...props}/>);
    });
    it("should render", () => {

      expect(wrapper).toBeTruthy();
    });
    it("styles", () => {
     
        
        expect(styles({transitions:{duration:{shortest:9},create:jest.fn()}})).toBeTruthy();
      });
  
  });
  