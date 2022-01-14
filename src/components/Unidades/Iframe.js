import "../../scss/_ifram.scss";

// Pdf Viewer
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

import test from "./../../assets/docs/test.pdf";
import unidad11 from "./../../assets/docs/1_1_Buenas_Practicas.pdf";
import unidad12 from "./../../assets/docs/1_2_Marcos_Trabajo.pdf";
import unidad13 from "./../../assets/docs/1_3_Calidad_Software.pdf";

import unidad21 from "./../../assets/docs/2_1_Criterios_requeri.pdf";
import unidad22 from "./../../assets/docs/2_2_Planeacion_proyecto.pdf";
import unidad23 from "./../../assets/docs/2_3_Criterios_Industria.pdf";

import unidad31 from "./../../assets/docs/3_1_Mejores_practicas_diseno.pdf";
import unidad32 from "./../../assets/docs/3_2_Mejores_practicas_planeacion.pdf";
import unidad33 from "./../../assets/docs/3_3_Mejores_practicas_diseño_experiencias.pdf";

import unidad41 from "./../../assets/docs/4_1_Modelo_prueba.pdf";

const Iframe = ({ btnTiile, iSrc, title, sSrc, pdf }) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	let definitive = null;
	console.log(pdf);
	window.scrollTo(0, 0);

	switch (pdf) {
		case "u11":
			definitive = unidad11;
			break;

		case "u12":
			definitive = unidad12;
			break;

		case "u13":
			definitive = unidad13;
			break;

		case "u21":
			definitive = unidad21;
			break;

		case "u22":
			definitive = unidad22;
			break;

		case "u23":
			definitive = unidad23;
			break;

		case "u31":
			definitive = unidad31;
			break;

		case "u32":
			definitive = unidad32;
			break;

		case "u33":
			definitive = unidad33;
			break;

		case "u41":
			definitive = unidad41;
			break;

		case "u42":
			definitive = test;
			break;

		case "u43":
			definitive = test;
			break;

		case "u44":
			definitive = test;
			break;

		default:
			definitive = test;
			break;
	}
	console.log(definitive);

	return (
		<>
			<details>
				<summary>
					<div className="button">{btnTiile}</div>
					<div className="details-modal-overlay-h5p"></div>
				</summary>

				<div className="details-modal-h5p">
					<div className="details-modal-close-h5p">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
								fill="black"
							/>
						</svg>
					</div>

					<div className="details-modal-title-h5p">
						<h1>{btnTiile}</h1>
					</div>
					<div className="details-modal-content-h5p">
						<div className="pdfViewer d-flex align-items-center flex-column justify-content-center">
							<div className="pdf">
								<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
									<Viewer fileUrl={definitive} plugins={[defaultLayoutPluginInstance]} />
								</Worker>
							</div>
						</div>
					</div>
				</div>
			</details>
		</>
	);
};

export default Iframe;
