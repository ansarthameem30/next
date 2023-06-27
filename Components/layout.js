// pages/layout.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles['nav-links']}>
          <li>
            <Link href="/" passHref legacyBehavior>
              <a className={styles['nav-link']}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref legacyBehavior>
              <a className={styles['nav-link']}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref legacyBehavior>
              <a className={styles['nav-link']}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/TodoSection" passHref legacyBehavior>
              <a className={styles['nav-link']}>Table</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles['layout-main']}>{children}</main>
    </div>
  );
};

export default Layout;
