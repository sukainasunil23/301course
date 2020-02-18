import React from 'react'
import notFound from '../../../assets/images/404.png'
import ErrorPage from './ErrorPage'
import { shallow } from '../../../enzyme';

describe('error page rendering', () => {

    it('renders the image', () => {
        const wrapper = shallow(<ErrorPage/>);
        const img = wrapper.find("img");
        expect(img.prop("src")).toEqual(notFound);
    })
})