import React from "react";
import { shallow} from "../../../enzyme";
import {GiftCard, styles} from './GiftCard'

describe("<GiftCard/>", () => {
  
    let wrapper, props;
    beforeEach(() => {
        props={
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
    it('should update form if the user is admin',()=>{
        const prop ={
            ...props,
            userEmail: "yoyogiftg2@gmail.com"
        }
        wrapper = shallow(<GiftCard {...prop}/>);
    })
  
  });
  