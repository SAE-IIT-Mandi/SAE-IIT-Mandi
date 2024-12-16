"use client";
import React from "react";
import styles from "./Footer.module.css";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle, logout } from "./authservice";
import { auth } from "./firebase";

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.error("Error signing in:", error);
      alert("Sign-in failed: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerDiv1}>
        <Image src="/images/main.jpg" alt="Formula Bharat" width={170} height={120} />
        <div className={styles.contact_info}>
                    <h2>Get in Touch</h2>
                    <p><a href="mailto:sae@iitmandi.ac.in">sae@iitmandi.ac.in</a></p>
                    <p>Address: SAE Club,IIT Mandi, Kamand, Himachal Pradesh, 175075 India</p>
        </div>
        <div className={styles.contact_info}>
          <Image src="/images/sae.png" alt="Formula Bharat" width={170} height={120} />
          {isAuthenticated ? (
            <button onClick={handleSignOut} className={`${styles.button} ${styles.signInOutButton}`}>
            Sign Out 
            </button>) : (
            <button onClick={handleSignIn} className={`${styles.button} ${styles.signInOutButton}`}>
            For Team
            </button>
            )
          }
        </div>
      </div>
        <footer className={styles.footer}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/SAEiitmandi/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/sae.iitmandi/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link youtube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://x.com/sae_iitmandi" target="_blank" rel="noopener noreferrer" className="social-link twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="footer-text">Copyright &copy; 2024 All rights reserved by SAE, IIT Mandi</p>
      </footer>
    </div>
  );
};

export default Footer;