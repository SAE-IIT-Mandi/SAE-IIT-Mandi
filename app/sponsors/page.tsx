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
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}
