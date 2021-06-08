import React from "react";
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
							
							Es importante identificar los conocimientos previos con los que cuentas.{" "}
							<br />
							Por lo tanto, te pedimos que contestes la evaluación diagnóstica con honestidad
							y seriedad, ya que esto apoyará al profesor en la orientación de tu desempeño. <br/>
							Por lo que te invitamos a solucionar el siguiente examen.
						</p>
						<a target="_blank" href="https://forms.gle/nLA9JTBeeauHfN1o9">
							<p>Solucionar evaluación diagnóstica</p>
						</a>
					</div>
					<div className="div-50 d-2">
						<h3>Tus Expectativas</h3>
						Es importante identifica qué es lo que esperas del curso. <br />
						Así mismo identificar las actividades que estás dispusto a hacer para lograr tus
						expectativas. <br/> Por lo que los invitamos a contestar las siguientes preguntas.
						<br /> <br />
						<a target="_blank" href="https://forms.gle/6EZWLPvc18mxvMfp9">
							<p>Solucionar encuesta</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conocerte;
