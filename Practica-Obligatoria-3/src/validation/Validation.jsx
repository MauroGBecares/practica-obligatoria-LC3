import React from 'react'
import PropTypes from 'prop-types';

const Validation = ({ esValido, messege }) => {
    const colorParrafoVerde = {
        color: 'green'
      };
      const colorParrafoRojo = {
        color: 'red'
      };

    if (esValido) {     
        return (
          <div>
              <p style={colorParrafoVerde}>{messege}</p>
          </div>
        )
    }
    if (!esValido && tieneLetraO){
        return (
            <div>
                <p style={colorParrafoRojo}>{messege}</p>
            </div>
          )
    }
}

Validation.propTypes = {
    esValido: PropTypes.bool,
    messege: PropTypes.string,
};

export default Validation