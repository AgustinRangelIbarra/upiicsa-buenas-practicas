import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PlecaMapaActividaes from "../../../assets/plecas/5P_15-05/Mapa_Actividades.jpg";

// Pdf Viewer
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import pdfFile from "../../../assets/docs/Agenda_Unidad_III.pdf";
// Pdf Viewer end

const MapaActividades = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<>
			<div className="pleca">
				<img src={PlecaMapaActividaes} alt="Unidad 1" className="pleca_de_contenido" />
			</div>

			<div className="container">
				<p>Sesión “Revisión de la agenda”</p>
				<h3 className="blue_text text-center my-4">
					¿Qué actividades de aprendizaje voy a realizar?
				</h3>
				<p>
					Revisa la agenda y accesa a cada una de las sesiones, cualquier duda plantéala en la
					sesión.
				</p>
				<div className="pdfViewer d-flex align-items-center flex-column justify-content-center">
					<div className="pdf">
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
							<Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
						</Worker>
					</div>
				</div>
			</div>
			<div className="flex-arrows">
				<Link to="/unidad3/forma_evaluacion">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad3">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad3/sesiones">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default MapaActividades;
