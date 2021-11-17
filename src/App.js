import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faRunning,
	faMapMarkedAlt,
	faBox,
	faClipboardList,
	faBookmark,
	faArrowRight,
	faArrowLeft,
	faHome,
	faBook, faChalkboardTeacher, faCalendar
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Bienvenida from "./components/Bienvenida";
import Glosario from "./components/Sidebar/Glosario";
import Ayuda from "./components/Sidebar/Ayuda";
import Creditos from "./components/Sidebar/Creditos";
import AntesComenzar from "./components/Contenido/AntesComenzar";
import ConoceProfesora from "./components/Contenido/ConoceProfesora";
import Conocerte from "./components/Contenido/Conocerte";
import NotFound from "./components/NotFound";
import Prueba from "./components/Prueba";
import { Unidad1Router } from "./components/Unidades/Unidad1/Router";
import { Unidad2Router } from "./components/Unidades/Unidad2/Router";
import { Unidad3Router } from "./components/Unidades/Unidad3/Router";
import { Unidad4Router } from "./components/Unidades/Unidad4/Router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faRunning, faMapMarkedAlt, faBox, faBookmark, faClipboardList, faArrowRight, faArrowLeft, faHome, faBook, faChalkboardTeacher, faCalendar);

const App = () => {
	return (
		<Router>
			<Header />
			<div className="main_grid">
				<Sidebar />

				<Switch>
					<div className="main_container">
						<Link to="/upiicsa-buenas-practicas">
							<span className="homeSVG">
								<FontAwesomeIcon icon="home" />
							</span>
						</Link>

						<Route path="/unidad1" component={Unidad1Router} />

						<Route path="/unidad2" component={Unidad2Router} />

						<Route path="/unidad3" component={Unidad3Router} />

						<Route path="/unidad4" component={Unidad4Router} />
						<Route exact path="/upiicsa-buenas-practicas" component={Bienvenida} />

						{/* <Route exact path="/unidad4/forma_eval" component={Unidad_4} /> */}

						<Route exact path="/glosario" component={Glosario} />
						<Route exact path="/ayuda" component={Ayuda} />
						<Route exact path="/creditos" component={Creditos} />
						<Route exact path="/antes_de_comenzar" component={AntesComenzar} />
						<Route exact path="/conoce_a_tu_profesora" component={ConoceProfesora} />
						<Route exact path="/para_conocerte" component={Conocerte} />

						<Route exact path="/prueba" component={Prueba} />

						<Route path="/404" component={NotFound} />
						{/* <Route path="/">
							<Redirect to="/404" />
						</Route> */}
					</div>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
