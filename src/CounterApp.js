import React, { useState }from "react";
import PropTypes from "prop-types";
const CounterApp = ({value}) => {
    const [ counter, setCounter ] = useState( 0 );
    const handdleAdd = (e) => setCounter( counter + 1 );
    const handdleSubstract = (e) => setCounter( counter - 1 );
    const handdleReset = (e) => setCounter( value );
    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handdleAdd }>+1</button>
            <button onClick={ handdleReset }>Reset</button>
            <button onClick={ handdleSubstract }>-1</button>
        </div>
    );    
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 10052021,
}
export default CounterApp;