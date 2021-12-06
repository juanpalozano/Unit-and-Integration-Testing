import React                from 'react';
import ReactDom             from 'react-dom';
import GreetingComponent    from './GreetingComponent';
import CounterComponent     from './CounterComponent';
import './index.css';

const divRoot = document.querySelector('#root');

/*
ReactDom.render(
    <GreetingComponent
        greetingTitle={'Hi Developer!'}
        greetingSubtitle={'¿Are you ready to code today?'}
    />
    , divRoot
);
*/

ReactDom.render(
    <CounterComponent />
    , divRoot
);