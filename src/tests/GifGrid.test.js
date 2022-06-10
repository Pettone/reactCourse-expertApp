import React from 'react';
import { render } from '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Testing GifGrid component', () => { 

    const category = 'Category';

    test('Must to show itself correctly', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Must to show items when images are loaded by useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:8080/image.jpg',
            title: 'image title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    });
});