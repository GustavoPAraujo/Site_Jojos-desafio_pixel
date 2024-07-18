"use client";

import { useState } from 'react';
import Link from 'next/link';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from './Formulario.module.css'; // Importar o CSS

const Formulario = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className={styles.main}>
        {submitted ? (
          <div className={styles.successMessage}>
            <h1>Formulário enviado com sucesso</h1>
          </div>
        ) : (
          <>
            <h1 className={styles.formTitle}>Formulário de Vaga</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Nome:
                <input type="text" name="name" required className={styles.input} />
              </label>
              <label className={styles.label}>
                Email:
                <input type="email" name="email" required className={styles.input} />
              </label>
              <label className={styles.label}>
                Link para portfólio:
                <input type="url" name="portfolio" className={styles.input} />
              </label>
              <label className={styles.label}>
                Por que você quer fazer parte da Jojos?
                <textarea name="reason" required className={styles.textarea}></textarea>
              </label>
              <button type="submit" className={styles.button}>Enviar formulário</button>
            </form>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Formulario;
