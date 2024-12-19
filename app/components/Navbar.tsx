"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState,useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    const logoElement = document.querySelector(`.${styles.logo}`);
    if (logoElement) {
      logoElement.classList.toggle(styles.hidden);
    }
  };
  useEffect(() => {
    const adjustBodyPadding = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
      }
    };
    adjustBodyPadding();
    window.addEventListener("resize", adjustBodyPadding);
    return () => {
      window.removeEventListener("resize", adjustBodyPadding);
    };
  }, []);
  
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
          <div className={`${styles.logo} ${isMenuOpen ? styles.hidden : ""}`}>
              <Image src="/images/Sae_new.png" alt="SAE Logo" width={200} height={100} />
          </div>
          <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link href="/projects">  Projects</Link>
          </li>
          <li>
            <Link href="/highlights">Highlights</Link>
          </li>
          <li>
            <Link href="/teamsae">Team SAE </Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;
