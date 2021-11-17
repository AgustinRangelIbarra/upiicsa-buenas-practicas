import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import AntesDeComenzar from "../../assets/plecas/Pleca_BP_NecesitasS.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FormaTrabajo from "./AntesComenzar/FormaTrabajo";

const AntesComenzar = () => {
	return (
		<div>
			<div className="pleca">
				<img src={AntesDeComenzar} alt="Antes de Comenzar" className="pleca_de_contenido" />
			</div>

			{/* <div>
				<a href="">Metodología de estudio va a estar basasda en estudio de casos</a>
			</div> */}

			{/* <h4 className="blue_text my-4">
				Consulta cada uno de los apartados, cualquier duda con gusto la aclararé en la sesión.
			</h4> */}

			<Tabs defaultActiveKey="metodologia" id="uncontrolled-tab-example" className="mb-3">
				<Tab eventKey="metodologia" title="Metodología">
					<h3 className="blue_text mb-4">¿Qué metodología educativa se utiliza en el curso?</h3>
					<p>
						El modelo pedagógico utilizado es: el modelo híbrido apoyado de la metodología de aula
						invertida.
					</p>
					<p>
						El método educativo híbrido es la combinación de la educación presencial y a distancia.
					</p>
					<p>
						Al combinar los entornos educativos y la orientación de aula invertida se fomenta el
						aprendizaje activo.
					</p>
					<div>
						<h4 className="text-center">¡Ahora bien!</h4>
					</div>
					<iframe
						src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=14"
						width="693"
						height="415"
						frameborder="0"
						allowfullscreen="allowfullscreen"
						title="Aprendizaje invertido"
					></iframe>
					<script
						src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
						charset="UTF-8"
					></script>

					<div>
						<p>
							Durante el semestre dedica 4 horas a la semana, que son, las que marca el programa de
							estudios y 3 horas extra clase, lo que te permite concluir el curso con éxito.{" "}
						</p>
						<p>
							Cuentas con la asesoría, guía y orientación de tú profesor, quien te dará
							retroalimentación y evaluará, utilizando los espacios que ofrece la plataforma como:
							la sección de tareas, la publicación de archivos en línea y las actividades en equipo
							que se realicen en los canales y en el salón de clases.
						</p>
						<p>
							Se te recomienda que apliques en la realización de las actividades de aprendizaje, el
							método de estudio: Exploración, Recepción, Reflexión, Repaso y Evaluación (ERRRE por
							sus siglas en ingles), lo que coadyuvara en el logro de los propósitos establecidos en
							la unidad de aprendizaje. Realiza la consulta del método en Internet.
						</p>
						<p>
							En las sesiones de canales de Teams y en el salón de clases, lleva a cabo el
							aprendizaje colaborativo.
						</p>
						<p>
							En el equipo toma decisiones, organiza y realiza actividades para llegar a la
							propuesta o solución del tema.
						</p>
						<p>
							Apoya al equipo en las actividades mediante la comunicación asertiva y un alto sentido
							de responsabilidad.
						</p>
						<p>
							Cuentas con la asesoría, guía y orientación de tú profesor, quien te dará
							retroalimentación y evaluará, utilizando los espacios que ofrece la plataforma como:
							la sección de tareas, la publicación de archivos en línea y las actividades en equipo
							que se realicen en los canales y en el salón de clases.
						</p>
					</div>
				</Tab>
				<Tab eventKey="durante_el_curso" title="Durante el curso">
					<h5 className="blue_text text-center">¡Te preguntarás!</h5>
					<h3 className="blue_text text-center">¿Qué se va a hacer durante y curso?</h3>
					<p>
						Bien, durante el curso se verán conceptos teóricos y se realizara el análisis de casos
						de estudio, sobre las buenas prácticas y estándares de la industria del software y del
						sector empresarial.
					</p>
					<p>
						Con lo cual, se identifican las mejores prácticas que se utilizan en el desarrollo de
						software en el ámbito laboral.
					</p>
					<p>
						Las buenas prácticas que se analizarán, se enfocan, en el proceso de desarrollo de
						software, el cual comprende las siguientes tres etapas:
					</p>
					<ul>
						<li>La identificación de requerimientos del software.</li>
						<li>La ingeniería de diseño de software.</li>
						<li>Los modelos de prueba de software.</li>
					</ul>
				</Tab>
				<Tab eventKey="forma_de_trabajo" title="Forma de Trabajo">
					<FormaTrabajo />
				</Tab>
				<Tab eventKey="contenido" title="Contenido del curso">
					<div className="text-center">
						<h5 className="blue_text">
							¿Cuál es el contenido de la unidad de aprendizaje y las competencias que
							desarrollarás?{" "}
						</h5>
						<p>Da click y navega por el mapa</p>
					</div>
					<iframe
						src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=6"
						width="776"
						height="583"
						frameborder="0"
						allowfullscreen="allowfullscreen"
						title="Mapa Buenas prácticas de software"
					></iframe>
					{/* <p>Cualquier duda plantéala en la sesión en línea.</p> */}
				</Tab>
				<Tab eventKey="forma_de_evaluacion" title="Evaluación">
					<p>
						Durante el curso se evaluará: <br />
						<ul>
							<li>Participación en el aula presencial o en línea.</li>
							<li>Evidencias de las actividades de aprendizaje individuales y colaborativas.</li>
							<li>
								La solución de un estudio de caso por unidad temática, a partir de la unidad dos.
							</li>
						</ul>
						Revisa la sección Forma de evaluación en cada unidad temática para que conozcas a
						detalle con qué y cómo serás evaluado. Cualquier duda exponla en el aula.
					</p>
				</Tab>
			</Tabs>

			<br />
			{/* <p className="text-secondary text-center">
				Consulta cada uno de los apartados, cualquier duda con gusto la aclararé en la sesión.
			</p> */}

			<script
				src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
				charset="UTF-8"
			></script>
			<div className="flex-arrows">
				<Link to="/para_conocerte">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/upiicsa-buenas-practicas">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AntesComenzar;
