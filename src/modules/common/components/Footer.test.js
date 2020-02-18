import React from "react";
import { shallow } from '../../../enzyme';
import Footer from './Footer';

describe('Footer test', () => {
    let props, wrapper, text;
    beforeEach (() => {
        props = {
            classes : {
                root : "root"
            }
        };
    })
    it('contains the text', () => {
        wrapper = shallow(<Footer {...props}/>).dive();
        text = wrapper.find("p").text();
        expect(text).toEqual("©2019 YoYo, Inc. All Rights Reserved.");
    })
})

