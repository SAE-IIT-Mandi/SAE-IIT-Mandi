// app/page.js
import Navbar from './components/Navbar';
import CarModel from './components/CarModel';
import styles from './globals.css';
import CarFeatures from './components/CarFeatures';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        
        {/* Section 1: 3D Car Model with Clickable Parts */}
        <section className={styles.section}>
          <h1>Main Features</h1>
          <p>Explore the key features of our car by clicking on different parts of the model.</p>
          {/* <CarModel /> */}
        </section>
        
        {/* Section 2: Proper Features */}
        <section className={styles.section}>
          <CarFeatures />
        </section>
        
        {/* Section 3: Our Journey */}
        <section className={styles.section}>
          {/* <WhoAreWe /> */}
        </section>
        
        {/* Section 4: Sponsorship and Contact */}
        <section className={styles.section}>
          <h1>Sponsorship & Contact</h1>
          <p>Learn about sponsorship opportunities and how to get in touch with us.</p>
        </section>
        
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
