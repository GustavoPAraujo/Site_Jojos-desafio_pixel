import client, { urlFor } from '../../../sanity';
import Image from 'next/image';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from './JogosSlug.module.css';

async function getData(slug) {
  const query = `*[_type == "game" && slug.current == $slug][0]{
    name,
    slug,
    image,
    price,
    description
  }`;
  const game = await client.fetch(query, { slug });
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
        <h1>{game.name}</h1>
        <Image src={urlFor(game.image).url()} alt={game.name} className={styles.gameImage} width={800} height={600} />
        <div className={styles.gameMeta}>
          <p>Valor: R$ {game.price.toFixed(2)}</p>
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
