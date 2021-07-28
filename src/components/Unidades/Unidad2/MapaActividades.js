import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaMapaActividaes from "../../../assets/plecas/5P_15-05/Mapa_Actividades.jpg";

const MapaActividades = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaMapaActividaes} alt="Unidad 1" className="pleca_de_contenido" />
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
				<Link to="/unidad2/fuentes_consulta">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default MapaActividades;
