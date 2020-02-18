import React from "react";
import MySnackBar from './Snackbar'
import { shallow } from '../../../enzyme';

describe('Snackbar test', () => {
    let props, wrapper;
    beforeEach (() => {
        props = {
            message: "message",
            color : "color"
        };
    })
    it('should render the MySnackBar component', () => {
        wrapper = shallow(<MySnackBar {...props}/>);
        expect(wrapper).toBeTruthy();
    })
    
})
