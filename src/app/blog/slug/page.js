import client, { urlFor } from '../../../sanity';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';


const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      <main>
        <h1>{post.title}</h1>
        <img src={urlFor(post.mainImage).url()} alt={post.title} />
        <div>{post.body}</div>
      </main>

      <Footer />
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
