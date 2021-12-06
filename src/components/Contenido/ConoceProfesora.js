import React, { useState } from "react";
import PlecaConoceProfesora from "../../assets/plecas/ConoceProfesora3.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConoceProfesora = () => {
	const [maestro, setMaestro] = useState(0);

	return (
		<div>
			<div className="pleca mb-4">
				<img src={PlecaConoceProfesora} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<div className="contaier-sm d-flex flex-column align-items-center">
				<h4>¿Quieres conocer a tus profesores? </h4>
				<h5>¡Adelante, da click en ver ficha!</h5> <br />
				<br />
				<h5>
					Al concluir contesta la encuesta dendo click{" "}
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSey4dUnf3e5rNUkGr0tpet5TV3U5KCAl0s6OE3F6oWR-D2JBQ/viewform?usp=sf_link  "
						target="_blank"
						rel="noopener noreferrer"
					>
						aquí
					</a>{" "}
				</h5>
			</div>
			<div className="profesores mb-4">
				<div className="container-prof">
					<h5 className="py-2">Pilar Gómez Miranda</h5>

					{/* <img src={ProfesoraPilar} height="300px" alt="Profesora Pilar Gomez" /> */}
					<h5 className="py-1">M. en C. Informática</h5>

					{/* <p className="descripcionProf">
						Profesora investigadora de las academias de informática y de la sección de
						posgrado del IPN-UPIICSA
					</p> */}
					<p>pgomezm@ipn.mx</p>
					<button type="button" className="btn btn-outline-info" onClick={() => setMaestro(0)}>
						Ver Ficha
					</button>
				</div>

				<div className="container-prof">
					<h5 className="py-2">Emmanuel González Rogel​</h5>

					{/* <img src={ProfesorEmmanuel} height="300px" alt="Profesora Pilar Gomez" /> */}
					<h5 className="py-1">M. en C. Informática</h5>

					{/* <p className="descripcionProf">
						Profesora investigadora de las academias de informática y de la sección de
						posgrado del IPN-UPIICSA
					</p> */}
					<p>egonzalezro@ipn.mx</p>
					<button type="button" className="btn btn-outline-info" onClick={() => setMaestro(1)}>
						Ver Ficha
					</button>
				</div>
			</div>
			{maestro === 0 ? (
				<div>
					<iframe
						src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=2"
						width="776"
						height="462"
						frameborder="0"
						allowfullscreen="allowfullscreen"
						title="Ficha_curricular_pilar"
					></iframe>
					<script
						src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
						charset="UTF-8"
					></script>
				</div>
			) : (
				<div>
					<iframe
						src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=5"
						width="845"
						height="500"
						frameborder="0"
						allowfullscreen="allowfullscreen"
						title="Ficha_curricular_Emmanuel"
					></iframe>
				</div>
			)}
			<br />
			{/* <p className="text-secondary text-center">
				Consulta cada uno de los apartados, cualquier duda con gusto la aclararé en la sesión.
			</p> */}
			<div className="flex-arrows">
				<Link to="/upiicsa-buenas-practicas">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/para_conocerte">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ConoceProfesora;
