"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector(`.${styles.logo}`).classList.toggle(styles.hidden);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        className={`${styles.navbar} ${
          isMenuOpen ? styles.navbarMenu + " " + styles.active : styles.navbarMenu
        }`}
      >
        <ul className={styles.navLeft}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sponsorship">Sponsors</Link>
          </li>
          <li>
            <Link href="/highlights">Highlights</Link>
          </li>
          <li>
            <Link href="/teamsae">Team SAE </Link>
          </li>
        </ul>
        <div className={`${styles.logo} ${isMenuOpen ? styles.hidden : ""}`}>
          <Link href="sae.iitmandi.ac.in">
            <Image src="/images/Sae.png" alt="SAE Logo" width={100} height={100} />
          </Link>
        </div>
        <ul className={styles.navRight}>
          <li>
            <Link href="/cars">  Cars</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li>
            <a href="https://www.sae.org/" target="_blank" rel="noopener noreferrer">SAE Website</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
