import styles from "./Inexistente.module.scss";
import classNames from "classnames";
import stylesTema from "styles/Tema.module.scss";
import { useNavigate } from "react-router-dom";

export default function Inexistente() {
	const navigate = useNavigate();

	return (
		<section className={classNames({
			[styles.container]: true,
			[stylesTema.container]: true
		}
		)}>
			<div className={styles.voltar}>
				<button onClick={() => navigate(-1)}>
					{"< Voltar"}
				</button>
			</div>
		</section>
	);
}