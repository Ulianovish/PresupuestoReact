import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ConstrolPresupuesto from './components/ControlPresupuesto';
function App() {
	const [presupuesto, updatePresupuesto] = useState(0);
	const [saldo, updateSaldo] = useState(0);
	const [mostrarPregunta, updatePregunta] = useState(true);
	const [gastos, setGastos] = useState([]);
	const [gasto, setGasto] = useState({})
	const [crearGasto, setCrearGasto] = useState(false)

	useEffect(() => {
		if (crearGasto) {
			setGastos([
				...gastos, gasto
			])
		} else return;

		const presupuestoRestante = saldo - gasto.cantidad;
		updateSaldo(presupuestoRestante);

		setCrearGasto(false);
	}, [crearGasto, gasto, gastos, saldo]);

	return (
		<div className="container">
			<header>
				<h1>Gasto Semanal</h1>
				<div className="contenido-principal contenido">
					{mostrarPregunta ? (
						<Pregunta
							updatePresupuesto={updatePresupuesto}
							updateSaldo={updateSaldo}
							updatePregunta={updatePregunta}
						/>

					) : (
							<div className="row">
								<div className="one-half column">
									<Formulario
										setGasto={setGasto}
										setCrearGasto={setCrearGasto}
									/>
								</div>
								<div className="one-half column">
									<Listado
										gastos={gastos}
									/>

									<ConstrolPresupuesto
										presupuesto={presupuesto}
										saldo={saldo}

									/>
								</div>
							</div>
						)}

				</div>
			</header>
		</div>
	);
}

export default App;
