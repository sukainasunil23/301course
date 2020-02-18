import React from "react";
import { shallow} from "../../../enzyme";
import InputTypeComponent from "./inputTypeComponent"
import {
    InputAdornment,
  } from "@material-ui/core";

describe('InputTypeComponent test', () => {
    let props, wrapper;
    beforeEach (() => {
        props = {
            props: "props"
        };
    })
    it('should render the InputTypeComponent component', () => {
        wrapper = shallow(<InputTypeComponent {...props}/>);
        expect(wrapper).toBeTruthy();
    })
    it('when endAdornment is true',()=>{
        const prop = {
            endAdornment: true
        }
        wrapper = shallow(<InputTypeComponent {...prop}/>);
        expect(wrapper.find(InputAdornment)).toBeTruthy();
    })
    it('when startAdornment is true',()=>{
        const prop = {
            startAdornment: true
        }
        wrapper = shallow(<InputTypeComponent {...prop}/>);
        expect(wrapper.find(InputAdornment)).toBeTruthy();
    })
})