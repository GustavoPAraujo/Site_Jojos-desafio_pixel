"use client";

import { useState } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import FormSubmit from '@/components/FormSubmit/FormSubmit';

import styles from './Formulario.module.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
    setSubmitted(true);
    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      portfolio: '',
      reason: ''
    });
  };

  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.formTitle}>Formulário de Vaga</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Nome:
            <input 
              type="text" 
              name="name" 
              required 
              className={styles.input} 
              value={formData.name} 
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Email:
            <input 
              type="email" 
              name="email" 
              required 
              className={styles.input} 
              value={formData.email} 
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Link para portfólio:
            <input 
              type="url" 
              name="portfolio" 
              className={styles.input} 
              value={formData.portfolio} 
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Por que você quer fazer parte da Jojos?
            <textarea 
              name="reason" 
              required 
              className={styles.textarea} 
              value={formData.reason} 
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit" className={styles.button}>Enviar formulário</button>
        </form>

        {submitted && (
          <FormSubmit />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Formulario;
