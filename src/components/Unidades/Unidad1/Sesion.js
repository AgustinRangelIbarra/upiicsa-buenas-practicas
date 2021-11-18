import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlecaIntro from "../../../assets/plecas/5P_15-05/Pleca_BPS_Sesiones.jpg";
import { sesiones } from "./sesiones.utils";

const Sesion = () => {
	console.log(sesiones);
	return (
		<>
			<div className="pleca">
				<img src={PlecaIntro} alt="Unidad 1" className="pleca_de_contenido" />
			</div>

			{sesiones.map((sesion) => (
				<div key={sesion.id}>
					<h4 className="blue_text text-center">{sesion.titulo_sesiones}</h4>
					<h5 className="blue_text text-center">{sesion.tema}</h5>

					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Actividad de Aprendizaje: Extra clase</Accordion.Header>
							{sesion.extra_clase && (
								<Accordion.Body>
									{sesion.extra_clase.actividad_aprendizaje1.sesion_linea.temas.map(
										(tema, index) => (
											<>
												<h5>
													{index + 1}. {tema.titulo}
												</h5>
												{tema.subtemas && (
													<h6>
														{tema.subtemas.map((subtema, index) => (
															<div>
																<h6 className="ml-4">
																	{index}.1.{index + 1} {subtema.titulo}
																</h6>
															</div>
														))}
													</h6>
												)}
											</>
										)
									)}
								</Accordion.Body>
							)}
						</Accordion.Item>
						{sesion.extra_clase.actividad_aprendizaje1 && (
							<Accordion.Item eventKey="1">
								<Accordion.Header>Sesión en el aula</Accordion.Header>
								<Accordion.Body></Accordion.Body>
							</Accordion.Item>
						)}
						{sesion.actividad_colaborativo.actividad_aprendizaje2 && (
							<Accordion.Item eventKey="2">
								<Accordion.Header>Actividad de aprendizaje colaborativo</Accordion.Header>
								<Accordion.Body>
									<h6>{sesion.actividad_colaborativo.actividad_aprendizaje2.titulo}</h6>
									{sesion.actividad_colaborativo.actividad_aprendizaje2.parrafos.map((parrafo) => (
										<p>{parrafo}</p>
									))}
								</Accordion.Body>
							</Accordion.Item>
						)}
					</Accordion>
				</div>
			))}

			<div className="flex-arrows">
				<Link to="/unidad1/mapa_actividades">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</Link>
				<Link to="/unidad1">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="book" />
					</div>
				</Link>
				<Link to="/unidad1/fuentes_consulta">
					<div className=" homeSVG">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</Link>
			</div>
		</>
	);
};

export default Sesion;
