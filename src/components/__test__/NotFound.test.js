import React from 'react';

import NotFound from '../NotFound';

describe('A suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <NotFound />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <NotFound />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders HTML tree correctly', () => {
        const html = mount(
            <NotFound />
        );
        expect(html).toMatchSnapshot();
    });
});
