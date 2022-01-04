import "../../scss/_ifram.scss";

// Pdf Viewer
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import pdfFile from "../../assets/docs/test.pdf";

const Iframe = ({ btnTiile, iSrc, title, sSrc }) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
						<small className="text-black-50">
							En caso de que no se visualice el componente, favor de dar click en "REUSE"
						</small>
						<iframe
							src={iSrc}
							width="958"
							height="564"
							frameBorder="0"
							allowFullScreen="allowfullscreen"
							title={title}
						></iframe>
						<script src={sSrc} charSet="UTF-8"></script>

						<div className="pdfViewer d-flex align-items-center flex-column justify-content-center">
							<div className="pdf">
								<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
									<Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
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
