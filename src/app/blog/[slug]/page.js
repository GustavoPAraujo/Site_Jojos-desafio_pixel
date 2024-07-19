import client, { urlFor } from '../../../sanity';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './BlogSlug.module.css';

const BlogSlug = ({ post }) => {
  if (!post) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <img src={urlFor(post.mainImage).url()} alt={post.title} className={styles.postImage} />
        <div className={styles.postBody}>{post.body}</div>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post: post || null,
    },
  };
}

export default BlogSlug;
