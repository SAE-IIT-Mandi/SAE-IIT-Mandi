// app/contact-us/page.tsx
import Navbar from '../components/Navbar';
import styles from '../Home.module.css';
import SAETeam from '../components/SAETeam';

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <SAETeam />
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}

