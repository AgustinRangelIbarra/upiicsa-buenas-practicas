import CreditosImg from "../../assets/plecas/Creditos.png";

const Creditos = () => {
	return (
		<div>
			<div className="pleca mb-4">
				<img src={CreditosImg} alt="Creditos" className="pleca_de_contenido" />
			</div>
			<div className="mt-4 text-center">
				<h4 className="blue_text my-4">Instituto Politécnico Nacional</h4>
				<h5>M. en C. Pilar Gómez Miranda</h5>
				<h5>M. en C. Emmanuel González Rogel</h5>
				<p className="mt-4">Colaborador</p>
				<h5>Lic. Fernando Vázquez Gómez</h5>
			</div>
		</div>
	);
};

export default Creditos;
