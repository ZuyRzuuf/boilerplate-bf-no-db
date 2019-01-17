import React from 'react';

import Dashboard from '../Dashboard';

describe('A suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <Dashboard />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <Dashboard />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders HTML tree correctly', () => {
        const html = mount(
            <Dashboard />
        );
        expect(html).toMatchSnapshot();
    });
});
