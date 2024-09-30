// app/contact-us/page.tsx
import Navbar from '../components/Navbar';
import styles from '../Home.module.css';
import React from 'react';
import NewsSection from '../components/News';
import Footer from '../components/Footer';

export default function Highlights() {
  return (
    <div>
      <Navbar />
    <main>
      <NewsSection/>
    </main>
    <Footer />
   </div>
  );
};

