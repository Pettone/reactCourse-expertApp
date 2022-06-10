import React from 'react';
import { render } from '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';

describe('Testing GifExpertApp component', () => { 

    test('Must to show itself correctly', () => { 

        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Must to show a category list', () => { 

        const categories = ['Dragonball','Pokemon'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});