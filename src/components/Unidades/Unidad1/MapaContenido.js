import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaMapaContenido from "../../../assets/plecas/5P_15-05/Mapa_Contenido.jpg";

const MapaContenido = () => {
	return (
		<div>
			<div className="pleca">
				<img src={PlecaMapaContenido} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<h4 className="text-center blue_text my-4">
				¿Cuál es la competencia y los contenidos de la unidad temática?
			</h4>

			<p>
				La competencia y los contenidos se presentan en el mapa, navega por el, dando clic en cada
				uno de los iconos, cualquier duda, realiza las preguntas en la sesión.
			</p>

			<iframe src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=7" 
			width="958" height="714" frameborder="0"
			 allowfullscreen="allowfullscreen" 
			 title="Mapa Unidad 1"></iframe>
			<script src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>
			<div className="flex-arrows">
				<Link to="/unidad1/intro_competencias">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad1/forma_evaluacion">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MapaContenido;
