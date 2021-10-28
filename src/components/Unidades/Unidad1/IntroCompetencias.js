import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaIntro from "../../../assets/plecas/5P_15-05/Int_Compe.jpg";

const IntroCompetencias = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaIntro} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<div className="container">
				<p>
					A lo largo de la unidad temática se abordarán los temas básicos sobre las buenas
					prácticas.
				</p>
				<p>
					Lo que te permitirá identifica que es una buena práctica y un marco de trabajo, las
					características y los beneficios de la implementación de dichos conceptos.
				</p>
				<p>
					Adicionalmente se contextualizará el concepto, los factores, criterios y métricas de
					calidad de software.
				</p>
				<p>
					Con lo cual tendrás las bases para diferenciar las mejores prácticas que se pueden
					implementar en el ciclo de desarrollo de software.
				</p>

				<h4 className="text-center blue_text my-4">
					¿Cuál es la competencia y los contenidos de la unidad temática?
				</h4>

				<p>
					La competencia y los contenidos se presentan en el mapa, navega por el, dando clic en cada
					uno de los iconos, cualquier duda, realiza las preguntas en la sesión.
				</p>

				<iframe
					src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=8"
					width="776"
					height="583"
					frameborder="0"
					allowfullscreen="allowfullscreen"
					title="Mapa Criterios para la identificación de requerimientos"
				></iframe>
				<script
					src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
					charset="UTF-8"
				></script>
			</div>
			<div className="flex-arrows">
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad1/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default IntroCompetencias;
