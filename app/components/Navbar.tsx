"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/Sae.png" alt="SAE Logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.navbarMenu + ' ' + styles.active : styles.navbarMenu}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sponsorship">Sponsorship</Link></li>
          <li><Link href="/contactus">Contact Us</Link></li>
          <li><a href="https://clubsae.iitmandi.co.in/" target="_blank" rel="noopener noreferrer">SAE Website</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
