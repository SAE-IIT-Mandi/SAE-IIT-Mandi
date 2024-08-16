// app/contact-us/page.tsx
import Navbar from '../components/Navbar';
import ContacttoUs from '../components/ContactUs';
import styles from '../Home.module.css';


export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <ContacttoUs />
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}

