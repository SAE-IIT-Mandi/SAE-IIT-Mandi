import React from "react";
import styles from "./Footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerDiv1}>
        <Image src="/images/main.jpg" alt="Formula Bharat" width={150} height={100} />
        <p>This space is left for all new updates and other items to be placed we can place anything like...subscribe</p>
        <div className={styles.footerAnchor}>
        <a href="https://www.facebook.com/SAEiitmandi/" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            Sponsors
          </a>
          </div>
        <div className={styles.footerAnchor}>
          <a href="https://www.instagram.com/sae.iitmandi/" target="_blank" rel="noopener noreferrer">
            Team
          </a>
          <a href="https://www.instagram.com/sae.iitmandi/" target="_blank" rel="noopener noreferrer">
            Projects
          </a>
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