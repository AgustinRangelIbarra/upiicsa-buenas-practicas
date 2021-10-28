import { Link } from 'react-router-dom';

import ConoceProfesora from '../../assets/plecas/ConoceProfesora3.jpg';
import ParaConocerte from '../../assets/plecas/ParaConocerte.jpg';
import AntesComenzar from "../../assets/plecas/Pleca_BP_NecesitasS.jpg";

const Contenidos = () => {
	return (
		<div className="contenidos">
			<hr />
			<Link to="/conoce_a_tu_profesora">
				{/* Conoce a tu profesora */}
				<img src={ConoceProfesora} alt="" />
			</Link>
			<hr />
			<Link to="/para_conocerte">
				{/* Para Conocerte */}
				<img src={ParaConocerte} alt="" />
			</Link>
			<hr />
			<Link to="/antes_de_comenzar">
				{/* Antes de Comenzar */}
				<img src={AntesComenzar} alt=""/>
			</Link>
			<hr />
		</div>
	);
}

export default Contenidos;
