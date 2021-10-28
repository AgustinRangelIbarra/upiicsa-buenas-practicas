import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaFuentesConsulta from "../../../assets/plecas/5P_15-05/Fuentes_Consulta.jpg";
import vide_bibliografia_u1 from "../../../assets/videos/u1_bibliografia.mp4";

const FuentesConsulta = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaFuentesConsulta} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<div className="container my-4">
				Consulta las fuentes bibliográficas que apoyan la indagación de los temas, dando click al
				video
			</div>
			<div className="my-4 d-flex flex-column align-items-center">
				<video controls className="video_bienvenida">
					<source src={vide_bibliografia_u1} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
			</div>
			<div className="flex-arrows">
				<Link to="/unidad1/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad2">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default FuentesConsulta;
