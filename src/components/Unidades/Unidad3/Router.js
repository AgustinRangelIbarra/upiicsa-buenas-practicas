import { Switch, Route, Redirect, Link } from "react-router-dom";
import PlecaUnidad3 from "../../../assets/plecas/Pleca_MPS_U3_2.jpg";
import FormaDeEvaluacion from "./FormaDeEvaluacion";
import FuentesConsulta from "./FuentesConsulta";
import IntroCompetencias from "./IntroCompetencias";
import MapaActividades from "./MapaActividades";
import MapaContenido from "./MapaContenido";
import Unidad_3 from "./Unidad_3";

export function Unidad3Router() {
	return (
		<div>
			<Link to="/unidad3">
				<div className="pleca">
					<img src={PlecaUnidad3} alt="Unidad 3" className="pleca_de_contenido" />
				</div>
			</Link>
			<Switch>
				<Route exact path="/unidad3" component={Unidad_3} />
				<Route exact path="/unidad3/intro_competencias" component={IntroCompetencias} />
				<Route exact path="/unidad3/mapa_contenido" component={MapaContenido} />
				<Route exact path="/unidad3/forma_evaluacion" component={FormaDeEvaluacion} />
				<Route exact path="/unidad3/mapa_actividades" component={MapaActividades} />
				<Route exact path="/unidad3/fuentes_consulta" component={FuentesConsulta} />

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</div>
	);
}
