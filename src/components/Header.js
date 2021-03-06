import PlecaPrincipal from "../assets/plecas/BuenasPS_sinLog.jpg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="d-flex">
			<Link to="/upiicsa-buenas-practicas">
				<img src={PlecaPrincipal} className="pleca_principal" alt="Análisis de Sistemas" />
			</Link>
		</header>
	);
};

export default Header;
