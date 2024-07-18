import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="" alt="JOJOS Logo" width={150} height={50} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/jogos" className={styles.navLink}>Jogos</Link>
        <Link href="/sobre" className={styles.navLink}>Sobre</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
        <Link href="/formulario" className={styles.navLink}>Carreira</Link>
      </nav>
    </header>
  );
};

export default Header;
