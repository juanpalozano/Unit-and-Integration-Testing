// Funcional Components
//import React, {Fragment} from "react";
import React from "react";
import PropTypes from "prop-types";
const GreetingComponent = ({greetingTitle, greetingSubtitle}) => {
    return (
        <div>
            <h1>{greetingTitle}</h1>
            <p>{greetingSubtitle}</p>
        </div>
    );    
}
GreetingComponent.propTypes = {
    greetingTitle: PropTypes.string.isRequired
}
GreetingComponent.defaultProps = {
    greetingTitle: 'Default greeting title.',
    greetingSubtitle: 'Default greeting subtitle.'
}
export default GreetingComponent;