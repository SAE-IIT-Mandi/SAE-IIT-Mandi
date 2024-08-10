// components/WhoAreWe.tsx
import styles from './WhoAreWe.module.css';
import Image from 'next/image';
import teamPic from '../public/images/team-pic.png'; // Update the path as needed

const WhoAreWe = () => {
  return (
    <section className={styles.whoAreWeSection}>
      <div className={styles.textContainer}>
        <h1>Who Are We</h1>
        <p>
          We are a dedicated team of professionals committed to delivering exceptional results. Our expertise spans across various domains, ensuring comprehensive solutions to meet your needs. With a focus on innovation and excellence, we strive to make a significant impact in our field.
        </p>
        <div className={styles.links}>
          <a href="#about" className={styles.link}>About Us</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={teamPic} alt="Team Picture" />
      </div>
    </section>
  );
};

export default WhoAreWe;
