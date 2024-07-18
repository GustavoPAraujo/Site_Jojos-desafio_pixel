import client, { urlFor } from '../../sanity';
import Link from 'next/link';

const Blog = ({ posts }) => {
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
        <h1>Blog</h1>
        <div>
          {posts.map((post) => (
            <div key={post.slug.current}>
              <Link href={`/blog/${post.slug.current}`}>
                <a>
                  <img src={urlFor(post.mainImage).url()} alt={post.title} />
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 JOJOS GAME STUDIOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage,
    excerpt
  }`;
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export default Blog;
