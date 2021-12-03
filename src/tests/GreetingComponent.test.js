import React from 'react';
import { render } from '@testing-library/react';
import GreetingComponent from '../GreetingComponent';

describe('Test File: GrettingComponent.js', () => {
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
});