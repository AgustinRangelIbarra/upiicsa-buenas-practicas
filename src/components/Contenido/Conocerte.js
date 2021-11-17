import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import ParaConocerte from "../../assets/plecas/ParaConocerte.jpg";

const Conocerte = () => {
	return (
		<div>
			<div className="pleca">
				<img src={ParaConocerte} alt="Para Conocerte" className="pleca_de_contenido" />
			</div>
			<div className="container-sm p-4">
				<div className="d-flex flex-row wrap container-100">
					<div className="div-50 d-1">
						<h3>Evaluación Diagnóstica</h3>
						<p>
							Es importante identificar los conocimientos previos con los que cuentas. <br />
							Contesta la evaluación diagnóstica con honestidad y seriedad, ya que esto apoyará al
							profesor en la orientación de tu desempeño durante el curso. <br />
						</p>
						<a target="_blank" rel="noreferrer" href="https://forms.gle/nLA9JTBeeauHfN1o9">
							<p>Evaluación diagnóstica</p>
						</a>
					</div>
					<div className="div-50 d-2">
						<h3>Tus Expectativas</h3>
						Es importante identificar ¿Qué es lo que esperas del curso? <br />
						Así mismo identificar las actividades que estás dispuesto a hacer para lograr tus
						expectativas. <br />
						<br />
						Contesta las siguientes preguntas:
						<br />
						<a target="_blank" rel="noreferrer" href="https://forms.gle/6EZWLPvc18mxvMfp9">
							<p>Tus expectativas</p>
						</a>
					</div>
				</div>
				<br />
				{/* <p className="text-secondary text-center">
					Consulta cada uno de los apartados, cualquier duda con gusto la aclararé en la sesión.
				</p> */}
			</div>
			<div className="flex-arrows">
				<Link to="/conoce_a_tu_profesora">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/antes_de_comenzar">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Conocerte;
