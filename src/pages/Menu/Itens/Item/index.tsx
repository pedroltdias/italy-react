import styles from "./Item.module.scss";
import { Roteiro } from "types/Roteiro";
import TagsRoteiro from "components/TagsRoteiro";
import { useNavigate } from "react-router-dom";

type Props = Roteiro;

export default function Item(props: Props) {
	const { id, title, description, photo } = props;
	const navigate = useNavigate();

	return (
		<div className={styles.item} onClick={() => navigate(`/roteiro/${id}`)}>
			<div className={styles.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<TagsRoteiro {...props} />
			</div>
		</div>
	);
}