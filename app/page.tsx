// app/page.tsx
import Navbar from './components/Navbar';
import CarViewer from './components/CarViewer';
import styles from './globals.css';
import CarFeatures from './components/CarFeatures';
import WhoAreWe from './components/WhoAreWe';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        
        {/* Section 1: 3D Car Model with Clickable Parts */}
        <section className={styles.section}>
          <CarViewer />
        </section>
        
        {/* Section 2: Proper Features */}
        <section className={styles.section}>
          <CarFeatures />
        </section>
        
        {/* Section 3: Our Journey */}
        <section className={styles.section}>
          <WhoAreWe />
        </section>
        
        {/* Section 4: Sponsorship and Contact */}
        <section className={styles.section}>
          <ContactUs />
        </section>
        
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}
