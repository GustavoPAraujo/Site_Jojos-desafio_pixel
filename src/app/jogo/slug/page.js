import client, { urlFor } from '../../../sanity';
import { useRouter } from 'next/router';

const GameDetail = ({ game }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1>JOJOS</h1>
        <nav>
          <Link href="/jogos">Jogos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/formulario">Carreira</Link>
        </nav>
      </header>

      <main>
        <h1>{game.title}</h1>
        <img src={urlFor(game.mainImage).url()} alt={game.title} />
        <p>Valor: R$ {game.price}</p>
        <button>Comprar</button>
        <div>{game.description}</div>
      </main>

      <footer>
        <p>&copy; 2024 JOJOS GAME STUDIOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "game"]{slug}`;
  const games = await client.fetch(query);

  const paths = games.map((game) => ({
    params: { slug: game.slug.current },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "game" && slug.current == $slug][0]`;
  const game = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      game,
    },
    revalidate: 60,
  };
}

export default GameDetail;