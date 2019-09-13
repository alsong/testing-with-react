import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr , checkProps } from '../../../utils';
import '../../setupTest';


const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('HeadLine Component', () => {

    describe('Checking Prop Types', () => {
        it('Should  throw a warning', () => {
             
            const expectedProps ={
                header: 'Test Header',
                des: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    age: 23,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline,expectedProps);
            expect(propsErr).toBeUndefined();

        })
    })

    describe('Have props', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test desc'
            }
            
            wrapper = setup(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper,'header');
            expect(h1.length).toBe(1);
        })

        it('Should render desc', () => {
            const desc = findByTestAttr(wrapper,'desc');
            expect(desc.length).toBe(1);
        })

    })

    describe('Have no props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    })
})

