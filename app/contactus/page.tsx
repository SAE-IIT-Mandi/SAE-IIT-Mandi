// app/contact-us/page.tsx
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import styles from '../Home.module.css';


export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutUs />
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}

