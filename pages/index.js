// pages/index.js
import React from 'react';
import styles from '../styles/HomeSection.module.css';



const IndexPage = () => {

  return (
    <div className={styles['home-container']}>
    <h2 className={styles['home-heading']}>Welcome to My Next.js App</h2>
    <p className={styles['home-content']}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor metus. Nulla
      facilisi. Aliquam pulvinar mauris non mauris efficitur efficitur. Curabitur commodo nunc
      vitae iaculis. Nulla auctor dolor non justo facilisis, ut convallis nulla tempus. Integer
      eget mi nec lorem feugiat commodo. Suspendisse ut odio a velit facilisis commodo eget non
      erat. Nulla porttitor, turpis non bibendum scelerisque, nunc tortor ultricies lacus, sit
      amet consequat metus nisl vitae fel
    </p>
  </div>
  );
};

export default IndexPage;
