"use client";

import { useState } from 'react';
import Link from 'next/link';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';


const Formulario = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
    setSubmitted(true);
  };

  return (
    <div>
      <Header />

      <main>
        {submitted ? (
          <div>
            <h2>Formulário enviado com sucesso</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Formulário de Vaga</h2>
            <label>
              Nome:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Link para portfólio:
              <input type="url" name="portfolio" />
            </label>
            <label>
              Por que você quer fazer parte da Jojos?
              <textarea name="reason" required></textarea>
            </label>
            <button type="submit">Enviar formulário</button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Formulario;
