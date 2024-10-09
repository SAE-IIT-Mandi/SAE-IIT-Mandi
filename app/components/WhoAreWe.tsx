import styles from './WhoAreWe.module.css';
import Image from 'next/image';

const WhoAreWe = () => {
  return (
    <section className={styles.whoAreWeSection}>
      <div className={styles.textContainer}>
        <h1>Vision and Mission</h1>
        <p>
        The vision of the Automobile Club of IIT Mandi is to become a leading force in automotive innovation by cultivating a culture of creativity, engineering excellence, and hands-on experience. We aim to empower students to push technological boundaries and make a lasting impact in the world of automotive design and sustainable mobility solutions.
        </p>
        <div className={styles.links}>
          <a href="contactus" className={styles.link}>About Us</a>
          <a href="cars" className={styles.link}>Our Projects</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
      {<Image src="/images/car.jpeg" alt="SAE Logo" width={300} height={300} />}
      </div>
    </section>
  );
};

export default WhoAreWe;
