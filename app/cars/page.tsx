import Navbar from '../components/Navbar';
import CarViewer from '../components/CarViewer';
import Cars from '../components/Cars';
import styles from './Cars.module.css';
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
      <nav className={styles.ovalNavbar}>
        <div className={styles.navbarContent}>
          <div><a href="#">Efficycle</a></div>
          <div><a href="#">Formula Bharat</a></div>
          <div><a href="#">Car 1</a></div>
          <div><a href="#">Car 2</a></div>
        </div>
      </nav>
        <section className={styles.section}>
          <CarViewer />
        </section>
        <Cars />
        
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

