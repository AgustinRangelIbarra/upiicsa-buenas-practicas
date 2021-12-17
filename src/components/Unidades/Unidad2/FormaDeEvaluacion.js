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

					<table className="table">
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
								Propuestas de buenas prácticas para la identificación de requerimientos del software. 
								</th>
								<td>
								Archivos con las propuestas de buenas prácticas del estudio de caso. 
								</td>
								<td>80%</td>
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
								Contiene la propuesta de buenas prácticas de las tres etapas del estudio de caso <b>(8 puntos)</b>.
								
									<ul>
										<li>En la etapa 1, hace la propuesta de los tres puntos solicitados. </li>
									</ul>
									<ul>
										<li>En la etapa 2, requisita la tabla todos los requerimientos funcionales.  </li>
									</ul>
									<ul>
										<li>En la etapa 3, muestra la planeación del proyecto con el control de cambios y versiones.   </li>
									</ul>
								</li>
								<li>
								Contiene la propuesta de buenas prácticas de las tres etapas del estudio de caso <b>(6 puntos)</b>.

								<ul>
									<li>
									En la etapa 1, hace la propuesta de los dos puntos solicitados. 
									</li>
								</ul>
								<ul>
									<li>
									En la etapa 2, requisita la tabla, de dos de los requerimientos funcionales. 
									</li>
								</ul>
								<ul>
									<li>
									En la etapa 3, muestra la planeación del proyecto con el control de cambios. 
									</li>
								</ul>
								</li>
								<li>
								Contiene la propuesta de buenas prácticas de las tres etapas del estudio de caso <b>(4 puntos)</b>.
								<ul>
									<li>
									En la etapa 1 hace la propuesta de uno de los puntos solicitados. 
									</li>
								</ul>
								<ul>
									<li>
									En la etapa 2 requisita la tabla de uno de los requerimientos funcionales. 
									</li>
								</ul>
								<ul>
									<li>
									En la etapa 3 muestra la planeación del proyecto con el control de versiones. 
									</li>
								</ul>
								</li>
								<li>
								Contiene la propuesta de buenas prácticas de las tres etapas del estudio de caso <b>(2 puntos)</b>.
								<ul>
									<li>
									En la etapa 1 hace la propuestas parciales de los puntos solicitados. 
									</li>
								</ul>
								<ul>
									<li>
									En la etapa 2 requisita parcialmente la tabla de los requerimientos funcionales. 
									</li>
								</ul>
								<ul>
									<li>
									En la etapa 3 muestra parcialmente la planeación del proyecto. 
									</li>
								</ul>
								</li>
								<li>No entrega el estudio de caso <b>(0 puntos)</b></li>
							</ul>
						</div>
					</Tab>
			

				
					
				
				</Tabs>
			</div>

			<div className="flex-arrows">
				<Link to="/unidad2/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad2">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad2/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default FormaDeEvaluacion;
