import client, { urlFor } from '../../../sanity';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Post = ({ post }) => {
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
        <h1>{post.title}</h1>
        <img src={urlFor(post.mainImage).url()} alt={post.title} />
        <div>{post.body}</div>
      </main>

      <footer>
        <p>&copy; 2024 JOJOS GAME STUDIOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "post"]{slug}`;
  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default Post;
