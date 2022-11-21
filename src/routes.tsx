import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Roteiro from "./pages/Roteiro";
import Sobre from "./pages/Sobre";


export default function AppRouter() {
	return (
		<main>
			<Router>
				<Roteiro />
				<Routes>
					<Route index element={<Inicio />} />
					<Route path="roteiro" element={<Roteiro />} />
					<Route path="sobre" element={<Sobre />} />
					{/* <Route path="/"> */}
					{/* </Route> */}
				</Routes>
			</Router>
		</main>
	);
}