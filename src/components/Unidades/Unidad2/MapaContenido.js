import PlecaMapaContenido from "../../../assets/plecas/5P_15-05/Mapa_Contenido.jpg";

const MapaContenido = () => {
	return (
		<div>
			<div className="pleca">
				<img src={PlecaMapaContenido} alt="Unidad 1" className="pleca_de_contenido" />
			</div>
			<iframe
				src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=8"
				width="776"
				height="583"
				frameborder="0"
				allowfullscreen="allowfullscreen"
				title="Mapa Criterios para la identificación de requerimientos"
			></iframe>
			<script
				src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
				charset="UTF-8"
			></script>
		</div>
	);
};

export default MapaContenido;
