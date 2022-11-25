import styles from "./Footer.module.scss";
// import { ReactComponent as Logo } from "assets/italy.png";
import Logo from 'assets/italy.png';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img className={styles.footer__logo} src={Logo} alt="Logo" />
			<p>@Italy 2022 - Alguns direitos reservados.</p>
		</footer>
	);
}