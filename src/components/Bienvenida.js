import Contenidos from "./Contenido/Contenidos";
import video_bienvenida from "../assets/videos/BuenasPracticas.mp4";

const Bienvenida = () => {
	return (
		<div className="mt-5">
			<h4 style={{ textAlign: "left" }}>Encuadre</h4> <br />
			<div className="d-flex flex-column align-items-center">
				<video controls className="video_bienvenida">
					<source src={video_bienvenida} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>{" "}
				<br />
				<p>Al concluir el video, contesta la encuesta y sigue revisando el curso</p>
				<p>
					Para la encuesta de Bienvenida da click{" "}
					<a href="https://forms.gle/cT6ZK3QiEFbqzrfK6" target="blank">aquí</a>
				</p>
				{/* <iframe
					title="Encuesta de Bienvenida"
					src="https://h5p6.tecnologia-educativa.com.mx/wp-admin/admin-ajax.php?action=h5p_embed&id=4"
					frameborder="0"
					allowfullscreen="allowfullscreen"
					className="encuesta_bienvenida"
				></iframe> */}
				<Contenidos />
			</div>
		</div>
	);
};

export default Bienvenida;
