import Nav from "components/Nav";
import Padrao from "components/Padrao";
import Menu from "pages/Menu";
import Inicio from "pages/Inicio";
import Inexistente from "pages/Inexistente";
import Roteiro from "pages/Roteiro";
import Sobre from "pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "pages/Footer";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Padrao />}>
						<Route index element={<Inicio />} />
						<Route path="Menu" element={<Menu />} />
						<Route path="sobre" element={<Sobre />} />
					</Route>
					<Route path="roteiro/:id" element={<Roteiro />} />
					<Route path="*" element={<Inexistente />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}