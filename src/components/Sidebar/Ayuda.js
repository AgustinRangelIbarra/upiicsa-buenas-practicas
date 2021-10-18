import AyudaImg from "../../assets/plecas/Ayuda.png";

const Ayuda = () => {
	return (
		<div>
			<div className="pleca">
				<img src={AyudaImg} alt="Ayuda" className="pleca_de_contenido" />
			</div>
			<div>
				<iframe
					src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=15"
					width="715"
					height="539"
					frameborder="0"
					allowfullscreen="allowfullscreen"
					title="Mapa de Navegación"
				></iframe>
				<script
					src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
					charset="UTF-8"
				></script>
			</div>
		</div>
	);
};

export default Ayuda;
