
import Link from 'next/link';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';


export default function Home() {

  return (
    <div>
      <Header />

      <main>
        <section>
          <img src="..." alt="Pacman" />
          <div>
            <img src="..." alt="Pacman" />
            <img src="..." alt="Tetris" />
            <img src="..." alt="Jogo da nave" />
          </div>
        </section>

        <section>
          <h2>Sobre Nós</h2>
          <p>
            Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! ...
          </p>
          <img src="..." alt="Arcade" />
        </section>

        <section>
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
};

