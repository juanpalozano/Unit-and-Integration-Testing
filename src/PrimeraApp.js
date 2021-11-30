// Funcional Components
//import React, {Fragment} from "react";
import React from "react";
import PropTypes from "prop-types";
const PrimeraApp = ({saludo, subtitulo}) => {
    return (
        <div>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </div>
        /*
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi Primera Aplicación</p>
        </Fragment>
        */
    );    
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    saludo: 'Saludo por defecto',
    subtitulo: 'Subtitulo por defecto'
}
export default PrimeraApp;