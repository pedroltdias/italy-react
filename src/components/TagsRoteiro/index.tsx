import classNames from "classnames";
import { Roteiro } from "types/Roteiro";
import styles from "./TagsRoteiro.module.scss";

export default function TagsRoteiro({
	category,
	duration,
	price
}: Roteiro) {
	return (
		<div className={styles.tags}>
			<div className={classNames({
				[styles.tags__tipo]: true,
				[styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
			})}>{category.label}</div>
			<div className={styles.tags__qtdpessoas}>Dura {duration} dia{duration === 1 ? "" : "s"}</div>
			<div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
		</div>
	);
}