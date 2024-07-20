"use client";

import client, { urlFor } from '../../sanity';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PostCard from '@/components/PostCard/PostCard';

import styles from './Blog.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [highlightedPost, setHighlightedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        slug,
        mainImage,
        body,
        author->{
          name
        },
        publishedAt
      }`;
      const posts = await client.fetch(query);
      setPosts(posts);
      if (posts.length > 0) {
        setHighlightedPost(posts[0]);
        console.log(posts[0]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.pageContainer}>

      <Header />

      <main className={styles.main}>

        <h1 className={styles.blogTitle}>Blog</h1>

        {highlightedPost && (
          <Link href={`/blog/${highlightedPost.slug.current}`}>

            <div className={styles.highlightedPost}>
              <img src={urlFor(highlightedPost.mainImage).url()} alt={highlightedPost.title} className={styles.highlightedPostImage} />
              <div className={styles.highlightedPostContent}>
                <h2>{highlightedPost.title}</h2>
                <h3>Por {highlightedPost.author.name}, {new Date(highlightedPost.publishedAt).toLocaleDateString()}</h3>
                <PortableText value={highlightedPost.body[0]} className={styles.excerpt} />
              </div>
            </div>

          </Link>
        )}
        <div className={styles.postsGrid}>
          {posts.length > 0 ? (
            posts.slice(1).map((post) => (
              <PostCard key={post.slug.current} post={post} />
            ))
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
