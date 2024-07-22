import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoContent}>
            <Image src="/icon.png" alt="JOJOS Logo" width={72} height={50} />
            <h1>
              <span className={styles.letter1}>J</span>
              <span className={styles.letter2}>O</span>
              <span className={styles.letter3}>J</span>
              <span className={styles.letter4}>O</span>
              <span className={styles.letter5}>S</span>
            </h1>
          </div>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="#jogos" className={styles.navLink}>Jogos</Link>
        <Link href="#sobre" className={styles.navLink}>Sobre</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
        <Link href="#formulario" className={styles.navLink}>Carreira</Link>
      </nav>
    </header>
  );
};

export default Header;
