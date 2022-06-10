import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';

describe('Tests in AddCategory component', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Must to show itself correctly', () => { 

        expect(wrapper).toMatchSnapshot();
    });

    test('Must to change the text box', () => { 

        const input = wrapper.find('input');
        const value = 'I am a value';

        input.simulate('change', { target: { value } } );
    });

    test('Do not post information with submit', () => { 

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Must to call setCategories and clean box text', () => {

        const value = 'Hi World';
        // Simulating inputChange...
        wrapper.find('input').simulate('change', { target: {value} });

        // Simulating submit...
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories must to have been called...
        expect(setCategories).toHaveBeenCalled();

        // input value must to be a empty string...
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});