import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaIntro from "../../../assets/plecas/5P_15-05/Int_Compe.jpg";

const IntroCompetencias = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaIntro} alt="Unidad 2" className="pleca_de_contenido" />
			</div>

			<div className="container txt">
				<p>
				Durante la unidad temática podrás identificar las mejores prácticas que se han establecido en la industria del software para las actividades que se realizan en la etapa de diseño del software. Las herramientas que han demostrado su eficiencia y eficacia en el diseño de los diagramas UML, en el diseño de experiencias de usuario (UX/UI) y para la generación de código (IDE). 
				</p>
				
				<p>
				Así mismo se verán las herramientas para llevar la planeación del desarrollo del proyecto de software. Con lo anterior podrás elegir las mejores herramientas que puedes utilizar en la etapa de diseño del software. 	
				</p>
				

			</div>




			<div className="flex-arrows">
				<Link to="/unidad3">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad3">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad3/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default IntroCompetencias;
