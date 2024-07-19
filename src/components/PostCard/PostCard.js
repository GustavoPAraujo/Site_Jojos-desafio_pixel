import Link from 'next/link';
import { urlFor } from '../../sanity';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <Link href={`/blog/${post.slug.current}`}>

          <img src={urlFor(post.mainImage).url()} alt={post.title} className={styles.postImage} />
          <h2 className={styles.postTitle}>{post.title}</h2>

      </Link>
    </div>
  );
};

export default PostCard;
