"use client";

import client, { urlFor } from '../../sanity';
import { useEffect, useState } from 'react';

import styles from './Blog.module.css'

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PostCard from '@/components/PostCard/PostCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        slug,
        mainImage,
        excerpt
      }`;
      const posts = await client.fetch(query);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div>

        </div>

        <div className={styles.postsGrid}>
          {posts.length > 0 ? (
            posts.map((post) => (
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
