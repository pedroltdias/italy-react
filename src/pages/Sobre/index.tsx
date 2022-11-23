import styles from "./Sobre.module.scss";
import stylesTema from "styles/Tema.module.scss";
import casa from "assets/sobre/casa.jpg";
import sobre1 from "assets/sobre/sobre1.jpg";
import sobre2 from "assets/sobre/sobre2.jpg";

const imagens = [sobre1, sobre2];

export default function Sobre() {
	return (
		<section>
			<h3 className={stylesTema.titulo}> Sobre </h3>
			<div className={styles.sobreNos}>
				<img src={casa} alt="Italy" />
				<div className={styles.sobreNos__texto}>
					<p>
						Nós do Italy oferecemos a vocês, nossos queridos clientes, a os roteiros mais sofisticados, confortáveis e cativantes! Prezamos pelo bem-estar de nossos clientes, assim fazemos as melhores rotas e aproveitamos o tempo do cliente da melhor forma possível para que sua experiência seja ainda mais intensa!
					</p>
					<p>
						Também buscamos o melhor custo benefício, pois sabemos que o dinheiro dos nossos clientes não é capim!
					</p>
					<p>
						Para acompanhar as maravilhas italianas, Italy possui uma reserva de hotéis parceiros, que harmonizam perfeitamente com o gosto do cliente, hotéis mais all-inclusive ou dormitórios!
					</p>
				</div>
			</div>
			<div className={styles.imagens}>
				{imagens.map((imagem, index) => (
					<div key={index} className={styles.imagens__imagem}>
						<img src={imagem} alt="imagem" />
					</div>
				))}
			</div>
		</section>
	);
}