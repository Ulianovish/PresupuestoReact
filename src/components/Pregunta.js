import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ updatePresupuesto, updateSaldo, updatePregunta }) => {
    const [cantidad, updateCantidad] = useState(0);
    const [error, updateError] = useState(false);

    // const definirPresupueesto = e => {
    //     updateCantidad(parseInt(e.target.value, 10));
    // }

    const agregarCantidad = e => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            updateError(true);
            return;
        }

        updateError(false);
        updatePresupuesto(cantidad);
        updateSaldo(cantidad);
        updatePregunta(false);
        //si se pasa la validacion
    }

    return (
        <>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarCantidad}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => updateCantidad(parseInt(e.target.value, 10))}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Coloca tu presupuesto"
                />
            </form>
        </>
    );
}

Pregunta.propTypes = {
    updatePresupuesto: PropTypes.func.isRequired,
    updatePregunta: PropTypes.func.isRequired,
    setCrearupdateSaldoGasto: PropTypes.func.isRequired
}

export default Pregunta;