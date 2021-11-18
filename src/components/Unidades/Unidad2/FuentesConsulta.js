import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaFuentesConsulta from "../../../assets/plecas/5P_15-05/Fuentes_Consulta.jpg";
import vide_bibliografia_u2 from "../../../assets/videos/u2_bibliografia.mp4";
const FuentesConsulta = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaFuentesConsulta} alt="Unidad 2" className="pleca_de_contenido" />
			</div>

			<div className="container my-4">
				Consulta las fuentes bibliográficas que apoyan la indagación de los temas, dando click al
				video <br />
				<p>Lo puedes detener en cualquier momento, para tomar nota de títulos y autores.</p>
			</div>
			<div className="my-4 d-flex flex-column align-items-center">
				<video controls className="video_bienvenida">
					<source src={vide_bibliografia_u2} type="video/mp4" />
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
				<Link to="/unidad3">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default FuentesConsulta;
