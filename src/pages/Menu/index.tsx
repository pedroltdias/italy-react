import styles from "./Menu.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";
import stylesTema from "styles/Tema.module.scss";

export default function Menu() {
	const [busca, setBusca] = useState("");
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState("");
	return (
		<section className={styles.menu}>
			<h3 className={stylesTema.titulo}>Menu</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.menu__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
			</div>
			<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
		</section>
	);
}