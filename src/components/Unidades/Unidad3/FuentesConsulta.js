import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaFuentesConsulta from "../../../assets/plecas/5P_15-05/Fuentes_Consulta.jpg";

const FuentesConsulta = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaFuentesConsulta} alt="Unidad 2" className="pleca_de_contenido" />
			</div>
			<div className="flex-arrows">
				<Link to="/unidad3/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad3">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad4">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default FuentesConsulta;
