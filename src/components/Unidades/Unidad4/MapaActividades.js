import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Pdf Viewer
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import pdfFile from "../../../assets/docs/Agenda_unidad_IV.pdf";
// Pdf Viewer end

import PlecaMapaActividaes from "../../../assets/plecas/5P_15-05/Mapa_Actividades.jpg";

const MapaActividades = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<>
			<div className="pleca">
				<img src={PlecaMapaActividaes} alt="Unidad 1" className="pleca_de_contenido" />
			</div>

			<div className="pdfViewer d-flex align-items-center flex-column justify-content-center">
				<div className="pdf">
					<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
						<Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
					</Worker>
				</div>
			</div>

			<div className="flex-arrows">
				<Link to="/unidad4/forma_evaluacion">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad4">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad4/fuentes_consulta">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default MapaActividades;
