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
				En la unidad temática se revisan las buenas prácticas para realizar las pruebas del software, por lo que al concluir podras identificar las opciones que la industria del software propone para llevarlas a cabo.
				Así mismo se veran las herramienas que se utilizan para realizara el control de cambios y versiones del software. Con lo anterior estas en posibilidad de proponer las pruebas pertinentes en función del tipo de software que se desarrolle.  
				
				</p>
				
				
				

			</div>

			<div className="flex-arrows">
				<Link to="/unidad4">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad4">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad4/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default IntroCompetencias;
