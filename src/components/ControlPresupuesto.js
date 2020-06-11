import React from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

const ConstrolPresupuesto = ({ presupuesto, saldo }) => {
    return (<>
        <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, saldo)}>
            Saldo: $ {saldo}
        </div>
    </>);
}

ConstrolPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    saldo: PropTypes.number.isRequired
}

export default ConstrolPresupuesto;