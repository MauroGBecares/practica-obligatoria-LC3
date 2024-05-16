import React from 'react'
import PropTypes from 'prop-types';

const Validation = ({ esValido, messege }) => {
    if (esValido) {     
        return alert(messege)
    }
    if (!esValido && tieneLetraO){
        return   
    }
}

Validation.propTypes = {
    esValido: PropTypes.bool,
    messege: PropTypes.string,
};

export default Validation