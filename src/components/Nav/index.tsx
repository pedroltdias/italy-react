import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

export default function Menu() {
	const rotas = [
		{
			label: "Inicio",
			to: "/"
		},
		{
			label: "Menu",
			to: "/menu"
		},
		{
			label: "Sobre",
			to: "/sobre"
		}
	];
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul className={styles.nav__list}>
				{rotas.map((rota, index) => (
					<li key={index} className={styles.nav__link}>
						<Link to={rota.to}>
							{rota.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}