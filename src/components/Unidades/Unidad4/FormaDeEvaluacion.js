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
								Elaboración del test de prueba. 
								</th>
								<td>
								Archivo con el la tabla del test de prueba. 
								</td>
								<td>20%</td>
							</tr>
							<tr>
								<th scope="row">Organizador gráfico de técnicas de pruebas de software.  </th>
								<td>Archivo con el organizador gráfico.</td>
								<td>20%</td>
							</tr>

							<tr>
								<th scope="row">Resumen de la importancia de las pruebas del software.  </th>
								<td>Archivo con el resumen.</td>
								<td>20%</td>
							</tr>

							<tr>
								<th scope="row">Propuestas para optimizar los costos de las pruebas del software. </th>
								<td>Archivo con las tres propuestas. </td>
								<td>10%</td>
							</tr>

							<tr>
								<th scope="row">Ventajas de cambios y versiones del software. </th>
								<td>Archivo con las tres ventajas del control de cambios y versiones.</td>
								<td>10%</td>
							</tr>


							
							
							<tr>
								<th scope="row"> </th>
								<td colSpan="1"></td>
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
							Criterios para evaluar la participación en las sesiones.
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
						Criterios para evaluar el test.
						</h5>
						<div className="container">
							<h6 className="blue_text">Criterios de contenido: </h6>
							<p>
								
								<ul>
									<li>ID del caso de prueba.</li>
									<li>Nombre del caso de prueba.</li>
									<li>Precondiciones.</li>
									<li>Pasos a seguir.</li>
									<li>Resultado esperado.</li>
									<li>Resultado real.</li>
									<li>Resultado general de la prueba.</li>
									<li>Comentarios.</li>
									
								</ul>
							</p>
							
						</div>
					</Tab>

					<Tab eventKey="comparativo" title="Comparativo">
						<h5 className="my-4 blue_text text-center">
						Criterios para... 
						</h5>
						<div className="container">
							<h6 className="blue_text">Criterios para el organizador gráfico: </h6>
							<span className="blue_text"></span> <br />
							<p>
								
								<ul>
									<li>Contine los conceptos solicitados y están organizados mostrando las descripciones y relación del tema formando ideas claras del tema, (2 puntos). </li>
									<li>El organizador grafico contiene algunos conceptos solicitados y la organización no hace descripciones y relaciones claras del tema, muestra poca relación clara de los temas, (1 punto). </li>
									<li>No contiene los conceptos solicitados del tema, su organización no muestra la relación de los temas, (0.5 puntos). </li>
									<li>Referencias en formato APAv7. </li>
									
								</ul>
							</p>

							<h6 className="blue_text">Criterios para el resumen: </h6>
							<span className="blue_text"></span> <br />
							<p>
								
								<ul>
									<li>Títulos del resumen. Indicar la idea principal del texto. </li>
									<li>Introducción. Exponer el contendio general. </li>
									<li>Cuerpo. Exponer la importancia de las pruebas. </li>
									<li>Conclusión. La reflexión final.</li>
									
								</ul>
							</p>

							<h6 className="blue_text">Criterios para la propuesta: </h6>
							<span className="blue_text"></span> <br />
							<p>
								
								<ul>
									<li>Indicar la propuesta considerando la importancia del costo de las pruebas.  </li>
							
									
								</ul>
							</p>

							<h6 className="blue_text">Criterios para las ventajas: </h6>
							<span className="blue_text"></span> <br />
							<p>
								
								<ul>
									<li>Indicar las ventajas con respecto a la gestión con la herramienta Git.</li>
							
									
								</ul>
							</p>
							
						</div>
					</Tab>
			

				
					
				
				</Tabs>
			</div>


			<div className="flex-arrows">
				<Link to="/unidad4/mapa_contenido">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad4">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad4/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default FormaDeEvaluacion;
