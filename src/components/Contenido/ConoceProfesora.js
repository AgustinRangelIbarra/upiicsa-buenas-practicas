import React, { useState } from "react";
import PlecaConoceProfesora from "../../assets/plecas/ConoceProfesora3.jpg";
import ProfesoraPilar from "../../assets/fotos/ProfesoraPilar.jpeg";
import ProfesorEmmanuel from "../../assets/fotos/ProfesorEmmanuel.jpg";

const ConoceProfesora = () => {
	const [maestro, setMaestro] = useState(0);

	return (
		<div>
			<div className="pleca mb-4">
				<img src={PlecaConoceProfesora} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<div className="contaier-sm d-flex flex-column align-items-center">
				{/* <h3>¿Quieres Conocer a tus Profesores? </h3> */}
				<h4>¡Adelante podrás ver su ficha curricluar!</h4> <br />
			</div>
			<div className="profesores mb-4">
				<div className="container-prof">
					<h5 className="py-2">Pilar Gomez Miranda</h5>

					<img src={ProfesoraPilar} height="300px" alt="Profesora Pilar Gomez" />
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

					<img src={ProfesorEmmanuel} height="300px" alt="Profesora Pilar Gomez" />
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
		</div>
	);
};

export default ConoceProfesora;
