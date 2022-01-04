import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div>
			<div className="side_menu">
				<Link to="/upiicsa-buenas-practicas">
					<div className="card-header">
						<FontAwesomeIcon icon="arrow-right" />
						<span className="p-4">Antes de Comenzar</span>
					</div>
				</Link>
				<hr />
				<div className="side_unidades">
					<div className="card-header">UNIDADES</div>
					<div className="list-group list-group-flush">
						<NavLink activeclass="activeLink" to="/unidad1">
							<div className="list-group-item">Unidad 1. Buenas prácticas y marcos de trabajo</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/unidad2">
							<div className="list-group-item">
								Unidad 2. Mejores prácticas en la gestión de los requerimientos de software
							</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/unidad3">
							<div className="list-group-item">
								Unidad 3. Mejores prácticas para la ingeniería de diseño
							</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/unidad4">
							<div className="list-group-item">
								Unidad 4. Mejores prácticas para los modelos de prueba de software
							</div>
						</NavLink>
					</div>
				</div>
				<div className="side_contenidos">
					<div className="card-header">SABER MAS</div>
					<ul className="list-group list-group-flush">
						<NavLink activeclass="activeLink" to="/glosario">
							<div className="list-group-item">Glosario</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/ayuda">
							<div className="list-group-item">Guía del estudiante</div>
						</NavLink>
						<NavLink activeclass="activeLink" className="link" to="/creditos">
							<div className="list-group-item">Créditos</div>
						</NavLink>
						{/* <NavLink activeclass="activeLink" className="link" to="/hola">
							<div className="list-group-item">Link a prueba de componente</div>
						</NavLink> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
