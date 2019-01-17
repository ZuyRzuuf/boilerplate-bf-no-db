import React from 'react';

import Header from '../Header';

describe('A suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders HTML tree correctly', () => {
        const html = mount(
            <Header />
        );
        expect(html).toMatchSnapshot();
    });
});
