import client, { urlFor } from '../../../sanity'; // Certifique-se de que este caminho está correto
import { PortableText } from '@portabletext/react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from './BlogSlug.module.css';

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug });
  return post;
}

const BlogSlug = async ({ params }) => {
  const post = await getData(params.slug);

  if (!post) {
    // Handle not found scenario
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <img src={urlFor(post.mainImage).url()} alt={post.title} className={styles.postImage} />
        <div className={styles.postBody}>
          <PortableText value={post.body} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogSlug;
