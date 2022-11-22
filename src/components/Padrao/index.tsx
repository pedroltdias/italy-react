import styles from "./Padrao.module.scss";
import { Outlet } from "react-router-dom";
import stylesTema from "styles/Tema.module.scss";

export default function Padrao() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					A sua viagem, nossa prioridade.
				</div>
			</header>
			<div className={stylesTema.container}>
				<Outlet />
			</div>
		</>
	);
} 