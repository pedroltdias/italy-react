import styles from "./Roteiro.module.scss";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import roteiros from "data/roteiros.json";
import TagsRoteiro from "components/TagsRoteiro";
import Inexistente from "pages/Inexistente";
import Padrao from "components/Padrao";

export default function Roteiro() {
	const { id } = useParams();
	const navigate = useNavigate();
	const roteiro = roteiros.find(item => item.id === Number(id));
	if (!roteiro) {
		return <Inexistente />;
	}
	return (
		<Routes>
			<Route path="*" element={<Padrao />}>
				<Route index element={
					<>
						<button className={styles.voltar} onClick={() => navigate(-1)}>
							{"< Voltar"}
						</button>
						<section className={styles.container}>
							<h1 className={styles.titulo}>
								{roteiro.title}
							</h1>
							<div className={styles.imagem}>
								<img src={roteiro.photo} alt={roteiro.title} />
							</div>
							<div className={styles.conteudo}>
								<p className={styles.conteudo__descricao}>
									{roteiro.description}
								</p>
								<TagsRoteiro {...roteiro} />
							</div>
						</section>
					</>
				} />
			</Route>
		</Routes>
	);
}