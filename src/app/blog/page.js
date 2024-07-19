"use client";

import client from '../../sanity';
import { useEffect, useState } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PostCard from '@/components/PostCard/PostCard';

import styles from './Blog.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        slug,
        mainImage
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
