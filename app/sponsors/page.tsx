import Navbar from '../components/Navbar';
import Spon from '../components/Spon';
import styles from '../Home.module.css';

export default function Sponsors() {
  return (
    <div>
      <Navbar />
      <main>
        <Spon />
      </main>
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
}
