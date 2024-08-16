// app/contact-us/page.tsx
import Navbar from '../components/Navbar';
import styles from '../Home.module.css';
import React from 'react';
import NewsSection from '../components/News';
import EventSection from '../components/Events';

export default function Highlights() {
  return (
    <div>
      <Navbar />
    <main>
      <EventSection/>
      <NewsSection/>
    </main>
     <footer className={styles.footer}>
     <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
   </footer>
   </div>
  );
};

