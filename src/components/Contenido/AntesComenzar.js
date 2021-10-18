import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import AntesDeComenzar from "../../assets/plecas/AntesComenzar3.jpg";
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

			<h4 className="blue_text my-4">Consulta cada uno de los apartados, cualquier duda con gusto la aclararé en la sesión.</h4>

			<Tabs defaultActiveKey="metodologia" id="uncontrolled-tab-example" className="mb-3">
				<Tab eventKey="metodologia" title="Metodología">
					<h3 className="blue_text">¿Qué metodología educativa se utiliza en el curso?</h3>
					<p>
						El modelo pedagógico utilizado es: el aula invertida, la cual permite optimizar el
						tiempo en clase poniendo atención en la participación del estudiante y atendiendo la
						mayor parte del tiempo las necesidades educativas el estudio de caso.
					</p>
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
					<p>
						Cuentas con la asesoría, guía y orientación de tú profesor, quien te dará
						retroalimentación y evaluará, utilizando los espacios que ofrece la plataforma como: la
						sección de tareas, la publicación de archivos en línea y las actividades en equipo que
						se realicen en los canales y en el salón de clases.
					</p>
				</Tab>
				<Tab eventKey="durante_el_curso" title="Durante el curso">
					<h3 className="blue_text">¿Qué se va a hacer durante y curso?</h3>
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
				<Tab eventKey="contenido" title="Contenido">
					<iframe
						src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=6"
						width="776"
						height="583"
						frameborder="0"
						allowfullscreen="allowfullscreen"
						title="Mapa Buenas prácticas de software"
					></iframe>
					<p>Cualquier duda plantéala en la sesión en línea.</p>
				</Tab>
			</Tabs>

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
				<Link to="/">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AntesComenzar;
