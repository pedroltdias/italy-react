import roteiro from "data/roteiros.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";
import { Roteiros } from "types/Roteiro";

interface Props {
	busca: string;
	filtro: number | null;
	ordenador: string;
}

export default function Itens(props: Props) {
	const [lista, setLista] = useState(roteiro);
	const { busca, filtro, ordenador } = props;

	function testaBusca(title: string) {
		const regex = new RegExp(busca, "i");
		return regex.test(title);
	}

	function testaFiltro(id: number) {
		if (filtro !== null)
			return filtro === id;
		return true;
	}

	function ordenar(novaLista: Roteiros) {
		switch (ordenador) {
			case "qtd_dias":
				return novaLista.sort((a, b) => a.duration > b.duration ? 1 : -1);
			case "preco":
				return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
			default:
				return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = roteiro.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
		setLista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);

	return (
		<div className={styles.itens}>
			{lista.map(item => (
				<Item
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
}