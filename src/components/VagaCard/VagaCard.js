import styles from './VagaCard.module.css';

const VagaCard = ({ title, department, location }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.details}>
        <span className={styles.department}>{department}</span>
        <span className={styles.location}>{location}</span>
      </div>
    </div>
  );
};

export default VagaCard;
