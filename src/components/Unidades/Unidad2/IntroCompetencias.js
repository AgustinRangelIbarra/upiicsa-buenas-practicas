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
				A lo largo de la unidad temática se tratarán los temas sobre la identificación de requerimientos del software. Lo que te permitirá identificar la manera de realizar las buenas prácticas para realizar el levantamiento de los requerimientos del software. Adicionalmente se verá un estudio de caso, en el que podrá proponer las buenas prácticas para el contacto con el usuario, la recopilación y revisión de requisitos, así como para la planeación del proyecto de software. 
				
				</p>
				
				

			</div>




			<div className="flex-arrows">
				<Link to="/unidad2">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad2">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad2/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default IntroCompetencias;
