'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Page Not Found</p>
        <p className={styles.description}>
          Oops! The page you're looking for seems to have vanished into the digital void.
        </p>
        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
      <div className={styles.decorationTop}></div>
      <div className={styles.decorationBottom}></div>
    </div>
  );
};

export default NotFound;