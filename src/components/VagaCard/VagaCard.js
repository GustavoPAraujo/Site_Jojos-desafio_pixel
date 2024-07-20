import styles from './VagaCard.module.css';

import Link from 'next/link';

const VagaCard = ({ id, title, department, location }) => {
  return (
    <Link href={`/formulario?id=${id}`}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <p className={styles.department}>{department}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default VagaCard;
