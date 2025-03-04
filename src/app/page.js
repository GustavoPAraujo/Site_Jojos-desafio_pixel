"use client";

import { useEffect, useState } from 'react';
import client from '../sanity';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../sanity';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import VagaCard from '@/components/VagaCard/VagaCard';
import GameCard from '@/components/GameCard/GameCard';

import styles from './Page.module.css';

export default function Home() {
  const [vagas, setVagas] = useState([]);
  const [games, setGames] = useState([]);
  const [highlightedGame, setHighlightedGame] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const query = `*[_type == "game"]{
        _id,
        name,
        slug,
        image,
        description,
        price
      }`;
      const games = await client.fetch(query);
      setGames(games);
      if (games.length > 0) {
        setHighlightedGame(games[0]);
      }
    };

    fetchGames();
  }, []);


  useEffect(() => {
    const fetchVagas = async () => {
      const query = `*[_type == "vaga"]{
        _id,
        title,
        department,
        location
      }`;
      const vagas = await client.fetch(query);
      setVagas(vagas);
    };

    fetchVagas();
  }, []);


  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.main}>
        <div id="jogos" className={styles.jogos}>

          <div className={styles.jogosContent}>
            {games.map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>

        </div>

        <div id='sobre' className={styles.sobre}>
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

        <div id='formulario' className={styles.carreira}>
          <h1>Carreira</h1>
          <div className={styles.vagasGrid}>
            {vagas.map((vaga) => (
              <VagaCard
                key={vaga._id}
                id={vaga._id}
                title={vaga.title}
                department={vaga.department}
                location={vaga.location}
              />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
