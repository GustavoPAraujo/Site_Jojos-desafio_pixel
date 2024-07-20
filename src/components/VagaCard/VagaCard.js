import styles from './VagaCard.module.css';

const VagaCard = ({ title, department, location }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.details}>
        <p className={styles.department}>{department}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default VagaCard;
