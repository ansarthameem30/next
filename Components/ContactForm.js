// components/ContactSection.js
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API call here
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div className={styles['contact-container']}>
      <h2 className={styles['contact-heading']}>Contact Us</h2>
      <form className={styles['contact-form']} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactSection;
