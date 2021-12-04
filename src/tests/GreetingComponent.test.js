import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GreetingComponent from '../GreetingComponent';
//import { render } from '@testing-library/react';


describe('Test File: GrettingComponent.js', () => {
    /*
    Jest Version
    test('Must show message: "Hello Developer!"', () =>{
        const greetingTitle = 'Hello Developer!';
        const { getByText } = render(<GreetingComponent greetingTitle={greetingTitle} />);
        expect(getByText(greetingTitle)).toBeInTheDocument();
    });
    test('Must show message: "¿Are you ready to code today?"', () =>{
        const greetingSubtitle = '¿Are you ready to code today?';
        const { getByText } = render(<GreetingComponent greetingSubtitle={greetingSubtitle} />);
        expect(getByText(greetingSubtitle)).toBeInTheDocument();
    });
    */
    test('The component should display the title "Hello Developer!".', () => {
        const greetingTitle = 'Hello Developer!';
        const wrapper = shallow(<GreetingComponent greetingTitle={greetingTitle} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('The component should display the subtitle "¿Are you ready to code today?".', () => {
        const greetingSubtitle = '¿Are you ready to code today?';
        const wrapper = shallow(<GreetingComponent greetingSubtitle={greetingSubtitle} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('The component should display the subtitle send from props.', () => {
        const greetingSubtitle = 'This is a test subtitle.';
        const wrapper = shallow(
            <GreetingComponent
                greetingSubtitle={greetingSubtitle}
            />
        );
        const subtitleText = wrapper.find('p').text();
        expect(subtitleText).toBe(greetingSubtitle);
    });
});