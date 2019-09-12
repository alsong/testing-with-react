import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import '../../setupTest';
import { findByTestAttr } from '../../../utils';

const setup = (props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
} 



describe('Header Component', () => {//describe the test

    let component;

    beforeEach(() => {
        component = setup();
    })

   it('It should render without error', () => {
       const wrapper = findByTestAttr(component,'headerComponent');
       expect(wrapper.length).toBe(1);
   })

   it('Should render a log', () => {
       const wrapper = findByTestAttr(component,'logoIMG');
       expect(wrapper.length).toBe(1);
   })
})

