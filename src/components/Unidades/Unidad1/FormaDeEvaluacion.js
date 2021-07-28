import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaEval from "../../../assets/plecas/5P_15-05/Forma_Evaluar.jpg";

const FormaDeEvaluacion = () => {
	return (
		<div>
			<div className="pleca">
				<img src={PlecaEval} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<div className="flex-arrows">
				<Link to="/unidad1/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad1/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default FormaDeEvaluacion;
