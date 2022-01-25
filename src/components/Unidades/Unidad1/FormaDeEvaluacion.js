import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaEval from "../../../assets/plecas/5P_15-05/Forma_Evaluar.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const FormaDeEvaluacion = () => {
	return (
		<div>
			<div className="pleca">
				<img src={PlecaEval} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<div className="container">
				<h4 className="blue_text text-center">¿Qué se va a evaluar?</h4>
				<p>
					Se evaluarán las evidencias de las actividades de aprendizaje individual y aprendizaje
					colaborativo.
				</p>
				<p>Revisa la información de la tabla referente a las actividades de aprendizaje.</p>
				<p>Plantea cualquier duda en la sesión</p>

				<div className="container">
					<p className="text-center negrita">Tabla 1. Actividades de aprendizaje</p>

					<table className="table">
						<thead>
							<tr>
								<th className="text-center" scope="col">Actividad de aprendizaje</th>
								<th className="text-center" scope="col">Evidencia de aprendizaje</th>
								<th className="text-center" scope="col">Ponderación</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Participación en las sesiones</th>
								<td>Expresarse verbalmente durante la sesión </td>
								<td className="text-center">20%</td>
							</tr>
							<tr>
								<th scope="row">
									Indagación, consulta y análisis de información. Elaboración de organizadores
									gráficos
								</th>
								<td>
									Archivos con los organizadores gráficos (mapas mentales, mapas conceptuales e
									infografías)
								</td>
								<td className="text-center">30%</td>
							</tr>
							<tr>
								<th scope="row">Exposición del tema indagado </th>
								<td colSpan="1">
									Archivo con la presentación para la exposición. <br /> Exposición del tema
									mediante la videoconferencia con apoyo de la presentación.
								</td>
								<td className="text-center">30%</td>
							</tr>
							<tr>
								<th scope="row">Preguntas de reflexión </th>
								<td colSpan="1">Preguntas contestadas en la plataforma </td>
								<td className="text-center">20%</td>
							</tr>
							<tr>
								<th scope="row"> </th>
								<td colSpan="1"></td>
								<td className="text-center">100%</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h4 className="blue_text text-center my-4">
					¿Cuáles son los criterios para la evaluación de las evidencias de aprendizaje?{" "}
				</h4>

				<h6>Consulta cada uno de los criterios, cualquier duda plantéala en la sesión. </h6>

				<Tabs defaultActiveKey="participacion" id="uncontrolled-tab-example">
					<Tab eventKey="participacion" title="Participación">
						<h5 className="my-4 blue_text text-center">
							Criterios para evaluar la participación en las sesiones
						</h5>
						<p>
							Durante el estudio de la unidad temática debes tener 6 participaciones, realiza
							aportaciones a los temas que se están tratando, las participaciones las registraré con
							gusto y al final del periodo se tomaran en cuenta en función de la siguiente
							ponderación.
						</p>
						<p>
							6 participaciones 2 puntos. <br />
							4 participaciones 1.5 puntos. <br />2 participaciones 1.0 punto.
						</p>
					</Tab>
					<Tab eventKey="organizadores" title="Organizadores">
						<h5 className="my-4 blue_text text-center">
							Criterios para evaluar los organizadores gráficos
						</h5>
						<div className="container">
							<h6 className="blue_text">Criterios de forma</h6>
							<p>
								<span className="blue_text">Portada:</span> <br />
								<ul>
									<li>Nombre de la institución</li>
									<li>Nombre de la unidad de aprendizaje</li>
									<li>Nombre y número de boleta de los estudiantes</li>
									<li>Nombre del tema</li>
									<li>Nombre de la profesora</li>
								</ul>
							</p>
							<h6 className="blue_text">Criterios de contenido</h6>
							<ul>
								<li>
									Contiene los conceptos solicitados y están organizados mostrando las descripciones
									y relación del tema formando ideas claras del tema. <b>(4 puntos)</b>.
								</li>
								<li>
									El organizador grafico contiene algunos conceptos solicitados y la organización no
									hace descripciones y relaciones claras del tema, muestra poca relación clara de
									los temas, <b>(2 puntos)</b>.
								</li>
								<li>
									No contiene los conceptos solicitados del tema, su organización no muestra la
									relación de los temas, <b>(0.5 puntos)</b>.
								</li>
								<li>Referencias en formato APAv7</li>
							</ul>
						</div>
					</Tab>
					<Tab eventKey="exposicion" title="Exposición">
						<h5 className="my-4 blue_text text-center">Criterios para la exposición de temas</h5>
						<div>
							<h6 className="blue_text">De forma</h6>
							<ul>
								<li>La vestimenta de los integrantes es formal.</li>
								<li>Ser puntual</li>
								<li>Todos los integrantes del equipo participan en la presentación.</li>
								<li>
									Los integrantes del equipo tienen sus cámaras activas al inicio de la sesión.
								</li>
								<li>
									Los integrantes del equipo después de la presentación desactivan sus cámaras.
								</li>
								<li>El estudiante que expone activa su cámara.</li>
								<li>
									El estudiante que expone comparte la pantalla, para que se visualice la
									presentación.
								</li>
								<li>La presentación se realizo en tiempo (entre 10 máximo 15 minutos).</li>
							</ul>
						</div>
					</Tab>
					<Tab eventKey="respuestas" title="Respuestas">
						<h5 className="my-4 blue_text text-center">Criterios de respuestas de reflexión</h5>
						<div>
							<h6 className="blue_text">Contenido:</h6>
							<ul>
								<li>
									Demuestra una reflexión propia del tema con fundamentos claros de sus ideas{" "}
									<b>(4 puntos).</b>
								</li>
								<li>
									Contiene poca reflexión del tema, no muestra sus ideas <b>(2 puntos).</b>
								</li>
								<li>
									No contiene la reflexión propia del tema, es información textual del autor{" "}
									<b>(0.5 puntos).</b>
								</li>
								<li>Referencias en formato APAv7.</li>
							</ul>
						</div>
					</Tab>
				</Tabs>
			</div>
			<div className="flex-arrows">
				<Link to="/unidad1/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad1/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default FormaDeEvaluacion;
