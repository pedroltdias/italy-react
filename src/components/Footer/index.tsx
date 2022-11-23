import styles from "./Footer.module.scss";
// import { ReactComponent as Logo } from "assets/italy.png";
import Logo from 'assets/italy.png';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img src={Logo} alt="Logo" />
		</footer>
	);
}