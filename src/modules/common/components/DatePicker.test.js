import React from "react";
import { shallow } from "../../../enzyme";
import {DatePickers,styles} from './DatePicker'

describe("<DatePickers/>", () => {
    const props = {
      classes:{
        container:'container',
        label:'label',
        defaultValue:'defaultValue',
        textField:'textField'
      }
    };
    let wrapper;
  
    it("should render", () => {
        wrapper = shallow(<DatePickers {...props}/>);
      expect(wrapper).toBeTruthy();
    });
 
  });
  
  describe("calling styles", () => {
   
  
    it("styles", () => {
        
      expect(styles({spacing:{unit:10}})).toBeTruthy();
    });
 
  });