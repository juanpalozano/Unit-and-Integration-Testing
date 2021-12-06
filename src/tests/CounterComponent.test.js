import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterComponent from '../CounterComponent';

describe('Test File: CounterComponent.js', () => {
    test('The component should display correctly the Counter Component with the default values.', () => {
        const wrapper = shallow(<CounterComponent />);
        expect(wrapper).toMatchSnapshot();
    });
    test('The component should display the value send from props.', () => {
        const counter = 100;
        const wrapper = shallow(
            <CounterComponent
                value={100}
            />
        );
        const counterDisplay = parseInt(wrapper.find('h2').text());
        expect(counterDisplay).toBe(counter);
    });
    test('The component should display the default value plus one.', () => {
        const result = 11;
        const wrapper = shallow(<CounterComponent />);
        wrapper.find('button').at(0).simulate('click');
        const counterDisplay = parseInt(wrapper.find('h2').text());
        expect(counterDisplay).toBe(result);
    });
    test('The component should display the default value minus one.', () => {
        const result = 9;
        const wrapper = shallow(<CounterComponent />);
        wrapper.find('button').at(2).simulate('click');
        const counterDisplay = parseInt(wrapper.find('h2').text());
        expect(counterDisplay).toBe(result);
    });
    test('The component should display the default value .', () => {
        const result = 100;
        const wrapper = shallow(<CounterComponent value={result}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterDisplay = parseInt(wrapper.find('h2').text());
        expect(counterDisplay).toBe(result);
    });
});