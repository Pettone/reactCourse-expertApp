import React from 'react';
import { render } from '@testing-library/jest-dom';
import { GifGridItem } from '../components/GifGridItem'; 
import { shallow } from 'enzyme';


describe('Testing GifGridItem component', () => {
    
    const id = '1';
    const title = 'Hi, I am a title';
    const url = 'https://www.url.com/image';
    const wrapper = shallow( <GifGridItem id = {id} title = {title} url = {url}/> );

    test('Must to show component correctly', () => { 

        expect(wrapper).toMatchSnapshot();
    });

    test('Must to have a paragraph', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test('Must to have an image and url equal to props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('Must to have animate__bounce animate__delay-2s class...', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__bounce animate__delay-2s')).toBe(true);
    });
});


