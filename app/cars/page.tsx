import Navbar from '../components/Navbar';
import styles from '../Home.module.css';
import CarViewer from '../components/CarViewer';
import Cars from '../components/Cars';
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <section className={styles.section}>
          <CarViewer />
        </section>
        <Cars />
        
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}

