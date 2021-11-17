import { Switch, Route, Redirect, Link } from "react-router-dom";
import PlecaUnidad2 from "../../../assets/plecas/Pleca_BPS_U2_3.jpg";
import FormaDeEvaluacion from "./FormaDeEvaluacion";
import FuentesConsulta from "./FuentesConsulta";
import IntroCompetencias from "./IntroCompetencias";
import MapaActividades from "./MapaActividades";
import MapaContenido from "./MapaContenido";
import Unidad_2 from "./Unidad_2";

export function Unidad2Router() {
	return (
		<div>
			<Link to="/unidad2">
				<div className="pleca">
					<img src={PlecaUnidad2} alt="Unidad 2" className="pleca_de_contenido" />
				</div>
			</Link>
			<Switch>
				<Route exact path="/unidad2" component={Unidad_2} />
				<Route exact path="/unidad2/intro_competencias" component={IntroCompetencias} />
				<Route exact path="/unidad2/mapa_contenido" component={MapaContenido} />
				<Route exact path="/unidad2/forma_evaluacion" component={FormaDeEvaluacion} />
				<Route exact path="/unidad2/mapa_actividades" component={MapaActividades} />
				<Route exact path="/unidad2/fuentes_consulta" component={FuentesConsulta} />

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</div>
	);
}
