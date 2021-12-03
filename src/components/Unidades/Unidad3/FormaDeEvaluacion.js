import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaEval from "../../../assets/plecas/5P_15-05/Forma_Evaluar.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const FormaDeEvaluacion = () => {
	return (
		<div>
			<div className="pleca">
				<img src={PlecaEval} alt="Unidad 2" className="pleca_de_contenido" />
			</div>

			

			<div className="container">
				<h4 className="blue_text text-center">¿Qué se va a evaluar?</h4>
				<p>
					Se evaluarán las evidencias de las actividades de aprendizaje individual y aprendizaje
					colaborativo.
				</p>
				<p>Revisa la información de la tabla referente a las actividades de aprendizaje.</p>
				<p>Plantea cualquier duda en la sesión.</p>

				<div className="container">
					<p className="text-center">Tabla 1. Actividades de aprendizaje</p>

					<table class="table">
						<thead>
							<tr>
								<th scope="col">Actividad de aprendizaje</th>
								<th scope="col">Evidencia de Aprendizaje</th>
								<th scope="col">Ponderación</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Participación en las sesiones</th>
								<td>Expresarse verbalmente durante la sesión. </td>
								<td>20%</td>
							</tr>
							<tr>
								<th scope="row">
								Diagrama de casos de uso. 
								</th>
								<td>
								Archivo con el diagrama de casos de uso.
								</td>
								<td>20%</td>
							</tr>
							<tr>
								<th scope="row">Cuestionario</th>
								<td>Cuestionario contestado</td>
								<td>20%</td>
							</tr>

							<tr>
								<th scope="row">Tabla comparativa de herramientas UX/UI </th>
								<td>Tabla comparativa. </td>
								<td>20%</td>
							</tr>

							<tr>
								<th scope="row">Tabla comparativa de herramientas IDE</th>
								<td>Tabla comparativa. </td>
								<td>20%</td>
							</tr>


							
							
							<tr>
								<th scope="row"> </th>
								<td colspan="1"></td>
								<td>100%</td>
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
							ponderación
						</p>
						<p>
							6 participaciones 2 puntos. <br />
							4 participaciones 1.5 puntos. <br />
							2 participaciones 1.0 punto.
						</p>
					</Tab>
					<Tab eventKey="diagrama" title="Diagrama">
						<h5 className="my-4 blue_text text-center">
						Criterios para evaluar el diagrama de casos de uso
						</h5>
						<div className="container">
							<h6 className="blue_text">Criterios de contenido: </h6>
							<p>
								
								<ul>
									<li>Debe tener las funciones y subfunciones del estudio de caso</li>
									<li>Debe tener las relaciones entre las funciones. </li>
									<li>Debe estar delimitado con la simbología propia de los diagramas UML. </li>
									<li>Debe tener los nombres correspondientes a las relaciones y a los casos de uso.  </li>
									
								</ul>
							</p>
							
						</div>
					</Tab>

					<Tab eventKey="comparativo" title="Comparativo">
						<h5 className="my-4 blue_text text-center">
						Criterios para evaluar las tablas comparativas de las herramientas. 
						</h5>
						<div className="container">
							<h6 className="blue_text">Criterios de contenido: </h6>
							<span className="blue_text">La tabla comparativa de las herramientas UX/UI e IDE debe tener los siguientes elementos:</span> <br />
							<p>
								
								<ul>
									<li>Nombre de la herramienta </li>
									<li>Función</li>
									<li>Ventajas</li>
									<li>Desventajas</li>
									
								</ul>
							</p>
							
						</div>
					</Tab>
			

				
					
				
				</Tabs>
			</div>


			<div className="flex-arrows">
				<Link to="/unidad3/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad3">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad3/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default FormaDeEvaluacion;
