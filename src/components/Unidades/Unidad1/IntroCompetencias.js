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
