import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaIntro from "../../../assets/plecas/5P_15-05/Int_Compe.jpg";

const IntroCompetencias = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaIntro} alt="Unidad 2" className="pleca_de_contenido" />
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
