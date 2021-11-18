import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaMapaActividaes from "../../../assets/plecas/5P_15-05/Mapa_Actividades.jpg";


import { Accordion } from "react-bootstrap";
import PlecaIntro from "../../../assets/plecas/5P_15-05/Pleca_BPS_Sesiones.jpg";
import { sesiones } from "./sesiones2.utils";
import "../../../scss/_sesion.scss";

const MapaActividades = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaMapaActividaes} alt="Unidad 1" className="pleca_de_contenido" />
			</div>


			<div className="container">
				<p>Sesión 9 “Revisión de la agenda”</p>
				<h3 className="blue_text text-center my-4">
					¿Qué actividades de aprendizaje voy a realizar?
				</h3>
				<p>
					Revisa la agenda y accesa a cada una de las sesiones, cualquier duda plantéala en la
					sesión.
				</p>
				<p className="blue_text text-center">
					<FontAwesomeIcon className="big-icon" icon="calendar" />
				</p>
			</div>


			
			





			<div className="flex-arrows">
				<Link to="/unidad2/forma_evaluacion">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad2">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad2/sesion2">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default MapaActividades;
