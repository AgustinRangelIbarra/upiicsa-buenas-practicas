import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div>
			<div className="side_menu">
				<Link to="/">
					<div className="card-header">
						<FontAwesomeIcon icon="arrow-right" />
						<span className="p-4">Ir al Encuadre</span>
					</div>
				</Link>
				<hr />
				<div className="side_unidades">
					<div className="card-header">UNIDADES</div>
					<div className="list-group list-group-flush">
						<NavLink activeclass="activeLink" to="/unidad1">
							<div className="list-group-item">
								Unidad 1. Buenas Prácticas y Marcos de Trabajo
							</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/unidad2">
							<div className="list-group-item">
								Unidad 2. Mejores Prácticas en la Gestión de los Requerimientos de Software
							</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/unidad3">
							<div className="list-group-item">
								Unidad 3. Mejores Prácticas para la Ingeniería de Diseño
							</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/unidad4">
							<div className="list-group-item">
								Unidad 4. Mejores Prácticas para los Modelos de Prueba de Software
							</div>
						</NavLink>
					</div>
				</div>
				<div className="side_contenidos">
					<div className="card-header">CONTENIDO</div>
					<ul className="list-group list-group-flush">
						<NavLink activeclass="activeLink" to="/glosario">
							<div className="list-group-item">Glosario</div>
						</NavLink>
						<NavLink activeclass="activeLink" to="/ayuda">
							<div className="list-group-item">Ayuda</div>
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
