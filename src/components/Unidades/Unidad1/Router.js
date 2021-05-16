import { Switch, Route, Redirect, Link } from "react-router-dom";
import PlecaUnidad1 from "../../../assets/plecas/BPS_U1.jpg";
import FormaDeEvaluacion from "./FormaDeEvaluacion";
import FuentesConsulta from "./FuentesConsulta";
import IntroCompetencias from "./IntroCompetencias";
import MapaActividades from "./MapaActividades";
import MapaContenido from "./MapaContenido";
import Unidad_1 from "./Unidad_1";

export function Unidad1Router() {
	return (
		<div>
			<Link to="/unidad1">
				<div className="pleca">
					<img src={PlecaUnidad1} alt="Unidad 1" className="pleca_de_contenido" />
				</div>
			</Link>
			<Switch>
				<Route exact path="/unidad1" component={Unidad_1} />
				<Route exact path="/unidad1/intro_competencias" component={IntroCompetencias} />
				<Route exact path="/unidad1/mapa_contenido" component={MapaContenido} />
				<Route exact path="/unidad1/forma_evaluacion" component={FormaDeEvaluacion} />
				<Route exact path="/unidad1/mapa_actividades" component={MapaActividades} />
				<Route exact path="/unidad1/fuentes_consulta" component={FuentesConsulta} />

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</div>
	);
}
