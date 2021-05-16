import { Switch, Route, Redirect, Link } from "react-router-dom";
import PlecaUnidad4 from "../../../assets/plecas/BPS_U4.jpg";
import FormaDeEvaluacion from "./FormaDeEvaluacion";
import FuentesConsulta from "./FuentesConsulta";
import IntroCompetencias from "./IntroCompetencias";
import MapaActividades from "./MapaActividades";
import MapaContenido from "./MapaContenido";
import Unidad_3 from "./Unidad_4";

export function Unidad4Router() {
	return (
		<div>
			<Link to="/unidad4">
				<div className="pleca">
					<img src={PlecaUnidad4} alt="Unidad 4" className="pleca_de_contenido" />
				</div>
			</Link>
			<Switch>
				<Route exact path="/unidad4" component={Unidad_3} />
				<Route exact path="/unidad4/intro_competencias" component={IntroCompetencias} />
				<Route exact path="/unidad4/mapa_contenido" component={MapaContenido} />
				<Route exact path="/unidad4/forma_evaluacion" component={FormaDeEvaluacion} />
				<Route exact path="/unidad4/mapa_actividades" component={MapaActividades} />
				<Route exact path="/unidad4/fuentes_consulta" component={FuentesConsulta} />

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</div>
	);
}
