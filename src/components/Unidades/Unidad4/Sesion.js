import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlecaIntro from "../../../assets/plecas/5P_15-05/Pleca_BPS_Sesiones.jpg";
import { sesiones } from "./sesiones4.utils";
import "../../../scss/_sesion.scss";
import Iframe from "../Iframe";

const Sesion = () => {
	return (
		<>
			<div className="pleca">
				<img src={PlecaIntro} alt="Unidad 4" className="pleca_de_contenido" />
			</div>

			{sesiones.length > 0 && (
				<div className="sesions_main mt-4">
					{sesiones.map((sesion) => (
						<div key={sesion.id} className="sesion_container m-2">
							<h4 className="blue_text text-center">{sesion.titulo_sesiones}</h4>
							<h5 className="blue_text text-center">{sesion.tema}</h5>

							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header>Actividad de Aprendizaje: Extra clase</Accordion.Header>
									{sesion.extra_clase && (
										<Accordion.Body>
											<h6>{sesion.extra_clase.actividad_aprendizaje1.titulo}</h6>
											<p>Antes de la sesión en línea</p>
											{sesion.extra_clase.actividad_aprendizaje1.resource && (
												<Iframe
													btnTiile={sesion.tema}
													iSrc={sesion.extra_clase.actividad_aprendizaje1.resource.iframe_src}
													title={sesion.extra_clase.actividad_aprendizaje1.resource.title}
													sSrc={sesion.extra_clase.actividad_aprendizaje1.resource.script_src}
												/>
											)}
											<hr />
											{sesion.extra_clase.actividad_aprendizaje1.sesion_linea.temas.map(
												(tema, index_) => (
													<>
														<div>
															{index_ + 1}. {tema.titulo}
														</div>
														{tema.subtemas && (
															<>
																{tema.subtemas.map((subtema, index) => (
																	<div>
																		<div style={{ margin: "0 0 0 20px" }}>
																			{index_ + 1}.1.{index + 1} {subtema.titulo}
																		</div>
																	</div>
																))}
															</>
														)}
													</>
												)
											)}
										</Accordion.Body>
									)}
								</Accordion.Item>
								{sesion.sesion_aula.sesion_videoconferencia && (
									<Accordion.Item eventKey="1">
										<Accordion.Header>Sesión en el aula</Accordion.Header>
										<Accordion.Body>
											<ol>
												{sesion.sesion_aula.sesion_videoconferencia.temas.map((tema, index) => (
													<>
														<li>
															{tema.titulo}
															<ul>{tema.parrafos?.length > 0 && <p>asdf</p>}</ul>
														</li>
													</>
												))}
											</ol>
										</Accordion.Body>
									</Accordion.Item>
								)}
								{sesion.actividad_colaborativo.actividad_aprendizaje2 && (
									<Accordion.Item eventKey="2">
										<Accordion.Header>Actividad de aprendizaje colaborativo</Accordion.Header>
										<Accordion.Body>
											<h6>{sesion.actividad_colaborativo.actividad_aprendizaje2.titulo}</h6>
											{sesion.actividad_colaborativo.actividad_aprendizaje2.parrafos.map(
												(parrafo) => (
													<p>{parrafo}</p>
												)
											)}
											<hr />
											{sesion.actividad_colaborativo.actividad_aprendizaje2.instrucciones.map(
												(instruccion, index) => (
													<p>
														{index + 1}.- {instruccion}
													</p>
												)
											)}
										</Accordion.Body>
									</Accordion.Item>
								)}
								{sesion.actividad_colaborativo.actividad_aprendizaje3 && (
									<Accordion.Item eventKey="3">
										<Accordion.Header>Actividad de aprendizaje colaborativo</Accordion.Header>
										<Accordion.Body>
											<h6>{sesion.actividad_colaborativo.actividad_aprendizaje3.titulo}</h6>
											{sesion.actividad_colaborativo.actividad_aprendizaje3.parrafos.map(
												(parrafo) => (
													<p>{parrafo}</p>
												)
											)}
											<hr />
											{sesion.actividad_colaborativo.actividad_aprendizaje3.instrucciones.map(
												(instruccion, index) => (
													<p>
														{index + 1}.- {instruccion}
													</p>
												)
											)}
										</Accordion.Body>
									</Accordion.Item>
								)}
								{sesion.actividad_colaborativo.actividad_aprendizaje4 && (
									<Accordion.Item eventKey="4">
										<Accordion.Header>Actividad de aprendizaje colaborativo</Accordion.Header>
										<Accordion.Body>
											<h6>{sesion.actividad_colaborativo.actividad_aprendizaje4.titulo}</h6>
											{sesion.actividad_colaborativo.actividad_aprendizaje4.parrafos.map(
												(parrafo) => (
													<p>{parrafo}</p>
												)
											)}
											<hr />
											{sesion.actividad_colaborativo.actividad_aprendizaje4.instrucciones.map(
												(instruccion, index) => (
													<p>
														{index + 1}.- {instruccion}
													</p>
												)
											)}
										</Accordion.Body>
									</Accordion.Item>
								)}
							</Accordion>
						</div>
					))}
				</div>
			)}

			<div className="flex-arrows">
				<Link to="/unidad4/mapa_actividades">
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

export default Sesion;
