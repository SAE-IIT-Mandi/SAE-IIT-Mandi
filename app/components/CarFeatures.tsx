// components/CarFeatures.tsx
import styles from './CarFeatures.module.css';
import Image from 'next/image';

const CarFeatures = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureCard}>
        <h2>Feature 1</h2>
        <p>Details about the first feature.</p>
      </div>
      <div className={styles.featureCard}>
        <h2>Feature 2</h2>
        <p>Details about the second feature.</p>
      </div>
      <div className={styles.logoContainer}>
        {<Image src="/images/sae.png" alt="SAE Logo" width={200} height={200} />}
      </div>
      <div className={styles.featureCard}>
        <h2>Feature 3</h2>
        <p>Details about the third feature.</p>
      </div>
      <div className={styles.featureCard}>
        <h2>Feature 4</h2>
        <p>Details about the fourth feature.</p>
      </div>
    </section>
  );
};

export default CarFeatures;
