import React from "react";
import ParaConocerte from "../../assets/plecas/ParaConocerte.jpg";

const Conocerte = () => {
	return (
		<div>
			<div className="pleca">
				<img src={ParaConocerte} alt="Para Conocerte" className="pleca_de_contenido" />
			</div>
			<div className="container-sm p-4">
				<p>
					Estimados estudiantes. Es importante identificar los conocimientos previos con los
					que cuentas. Por lo tanto, te pedimos que contestes la evaluación diagnóstica con
					honestidad y seriedad, ya que esto apoyará al profesor en la orientación de tu
					desempeño.
				</p>
				<div className="d-flex flex-row wrap container-100">
					<div className="div-50 d-1">
						Encuesta:{" "}
						<a target="_blank" href="https://forms.gle/nLA9JTBeeauHfN1o9">
							<h6>PARA CONOCERTE</h6>
						</a>
					</div>
					<div className="div-50 d-2">
						<h3>Tus Expectativas</h3>
						<p>Estimados estudiantes.</p>
						Es importante identifica qué es lo que esperas del curso. <br />
						Así mismo identificar las actividades que estás dispusto a hacer para lograr tus
						expectativas. Por lo que los invitamos a contestar las siguientes preguntas.
						<br /> <br />
						<a target="_blank" href="https://forms.gle/6EZWLPvc18mxvMfp9">
							<h6>SOLUCIONAR ENCUESTA</h6>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conocerte;
