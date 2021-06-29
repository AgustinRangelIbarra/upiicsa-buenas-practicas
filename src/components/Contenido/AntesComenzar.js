import React from "react";
import AntesDeComenzar from "../../assets/plecas/AntesComenzar3.jpg";

const AntesComenzar = () => {
	return (
		<div>
			<div className="pleca">
				<img src={AntesDeComenzar} alt="Antes de Comenzar" className="pleca_de_contenido" />
			</div>
			<div>contenido de la unidad</div>
			<iframe
				src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=6"
				width="776"
				height="583"
				frameborder="0"
				allowfullscreen="allowfullscreen"
				title="Mapa Buenas prácticas de software"
			></iframe>
			<div>
				<a href="">Metodología de estudio va a estar basasda en estudio de casos</a>
			</div>
			<script
				src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
				charset="UTF-8"
			></script>
		</div>
	);
};

export default AntesComenzar;
