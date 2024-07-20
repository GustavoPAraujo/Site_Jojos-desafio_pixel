import Link from 'next/link';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import styles from './Page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.main}>

        <div className={styles.jogos}>
          <img src="..." alt="Pacman" />
          <div>
            <img src="..." alt="Pacman" />
            <img src="..." alt="Tetris" />
            <img src="..." alt="Jogo da nave" />
          </div>
        </div>

        <div className={styles.sobre}>

          <h1>Sobre Nós</h1>

          <div className={styles.sobreContent}>
            <div>
              <p>
                Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.
              </p>
              <p>
                Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.
              </p>
              <p>
                Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!
              </p>
            </div>
            <img src='/sobreFoto.png' alt='Sobre' />
          </div>
        </div>

        <section className={styles.carreira}>
          <h2>Carreira</h2>
          <div>
            <Link href="/formulario">Desenvolvedor C++ Júnior</Link>
            <Link href="/formulario">Desenvolvedor C++ Pleno</Link>
            <Link href="/formulario">Engenheiro de Software</Link>
            <Link href="/formulario">Artista Técnico</Link>
            <Link href="/formulario">Representante Comercial</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
