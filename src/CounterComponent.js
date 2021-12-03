import React, { useState }from "react";
import PropTypes from "prop-types";
const CounterComponent = ({value}) => {
    const [ counter, setCounter ] = useState( 0 );
    const handdleAdd = (e) => setCounter( counter + 1 );
    const handdleSubstract = (e) => setCounter( counter - 1 );
    const handdleReset = (e) => setCounter( value );
    return (
        <div>
            <h1>CounterComponent</h1>
            <h2>{counter}</h2>
            <button onClick={ handdleAdd }>+1</button>
            <button onClick={ handdleReset }>Reset</button>
            <button onClick={ handdleSubstract }>-1</button>
        </div>
    );    
}
CounterComponent.propTypes = {
    value: PropTypes.number.isRequired
}
CounterComponent.defaultProps = {
    value: 10052021,
}
export default CounterComponent;