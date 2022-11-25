import roteiro from "data/roteiros.json";
import styles from "./Inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import nossaCasa from "assets/menu/header.jpg";
import { useNavigate } from "react-router-dom";
import { Roteiro } from "types/Roteiro";

export default function Inicio() {
	let roteirosRecomendados = [...roteiro];
	roteirosRecomendados = roteirosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

	const navigate = useNavigate();

	function redirecionarParaDetalhes(roteiro: Roteiro) {
		navigate(`/roteiro/${roteiro.id}`, { state: { roteiro }, replace: true });
	}

	return (
		<section>
			<h3 className={stylesTema.titulo}>
				Recomendações de roteiros
			</h3>
			<div className={styles.recomendados}>
				{roteirosRecomendados.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button
							className={styles.recomendado__botao}
							onClick={() => redirecionarParaDetalhes(item)}
						>
							Ver Mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTema.titulo}>Nossa Casa</h3>
			<div className={styles.nossaCasa}>
				<div className={styles.nossaCasa__endereco}>
					<img src={nossaCasa} alt="Casa do Aluroni" />
					SCLS 312, Loja 36 - Brasília - DF
				</div>
			</div>
		</section>
	);
}