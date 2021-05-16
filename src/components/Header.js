import PlecaPrincipal from "../assets/plecas/BuenasPS_ID2.jpg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="d-flex">
			<Link to="/">
				<img src={PlecaPrincipal} className="pleca_principal" alt="Análisis de Sistemas" />
			</Link>
		</header>
	);
};

export default Header;
