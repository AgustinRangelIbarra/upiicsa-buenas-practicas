import GlosarioImg from "../../assets/plecas/Glosario.png";

const Glosario = () => {
	return (
		<div>
			<div className="pleca">
				<img src={GlosarioImg} alt="Glosario" className="pleca_de_contenido" />
			</div>
			<br></br>
			<br></br>

			<div className="glosario">
				<iframe src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=30" 
				width="958"
				height="1107" 
				frameborder="0" 
				allowfullscreen="allowfullscreen" 
				title="Glosario buenas prácticas de software."></iframe>
				<script src="https://h5p6.tecnologia-educativa.com.mx/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>
			</div>
			
		</div>
	);
};

export default Glosario;
