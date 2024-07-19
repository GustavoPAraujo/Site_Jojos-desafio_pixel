import client, { urlFor } from '../../../sanity';
import { PortableText } from '@portabletext/react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import styles from './BlogSlug.module.css';

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    author-> {
      name
    }
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

const BlogSlug = async ({ params }) => {
  const post = await getData(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.main}>
        <img src={urlFor(post.mainImage).url()} alt={post.title} className={styles.postImage} />
        <h2 className={styles.postTitle}>{post.title}</h2>
        <div className={styles.postMeta}>
          <p>Por {post.author.name}, {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className={styles.postBody}>
          <PortableText 
            value={post.body} 
            components={{
              block: {
                normal: ({ children }) => <p>{children}</p>,
              },
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogSlug;
