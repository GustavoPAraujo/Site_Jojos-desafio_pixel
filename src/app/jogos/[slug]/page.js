import client, { urlFor } from '../../../sanity';
import Image from 'next/image';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from './JogosSlug.module.css';

// Função para buscar os dados do jogo
async function getData(slug) {
  const query = `*[_type == "game" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    price,
    description
  }`;
  const game = await client.fetch(query, { slug });
  console.log(game);
  return game;
}

const GameSlug = async ({ params }) => {
  const game = await getData(params.slug);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.main}>
        <h1>{game.title}</h1>
        <Image src={game.image} alt={game.title} className={styles.gameImage} />

        <div className={styles.gameMeta}>
          <p>Valor: R$ {game.price}</p>
          <button className={styles.buyButton}>Comprar</button>
        </div>
        <div className={styles.gameDescription}>
          <p>{game.description}</p>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default GameSlug;
