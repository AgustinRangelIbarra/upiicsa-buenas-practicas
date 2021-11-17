import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<div className="menu_container">
				<div className="menu_option">
					<Link to="/unidad1/intro_competencias">
						<div className="icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span className="menu_icons">
								<FontAwesomeIcon icon="running" />
							</span>
						</div>
						<p>Introducción y Competencias</p>
					</Link>
				</div>

				<div className="menu_option">
					<Link to="/unidad1/mapa_contenido">
						<div className="icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span className="menu_icons">
								<FontAwesomeIcon icon="box" />
							</span>
						</div>
						<p>Mapa de Contenido</p>
					</Link>
				</div>

				<div className="menu_option">
					<Link to="/unidad1/forma_evaluacion">
						<div className="icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span className="menu_icons">
								<FontAwesomeIcon icon="bookmark" />
							</span>
						</div>
						<p>Forma de Evaluación</p>
					</Link>
				</div>

				<div className="menu_option">
					<Link to="/unidad1/mapa_actividades">
						<div className="icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span className="menu_icons">
								<FontAwesomeIcon icon="map-marked-alt" />
							</span>
						</div>
						<p>Mapa de Actividades</p>
					</Link>
				</div>

				<div className="menu_option">
					<Link to="/unidad1/sesion">
						<div className="icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span className="menu_icons">
								<FontAwesomeIcon icon="chalkboard-teacher" />
							</span>
						</div>
						<p>Sesiones</p>
					</Link>
				</div>

				<div className="menu_option">
					<Link to="/unidad1/fuentes_consulta">
						<div className="icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span className="menu_icons">
								<FontAwesomeIcon icon="clipboard-list" />
							</span>
						</div>
						<p>Fuentes de Consulta</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Menu;
