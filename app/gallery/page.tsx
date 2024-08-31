import Navbar from '../components/Navbar';
import styles from '../Home.module.css';
import Gallerybox from '../components/Gallerybox';
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <Gallerybox />
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}


