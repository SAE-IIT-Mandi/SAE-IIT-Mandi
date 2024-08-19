import styles from './Welcome.module.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.textContainer}>
        <h1>Welcome IIT Mandi Racing</h1>
        <p>
          We are a dedicated team of professionals committed to delivering exceptional results. Our expertise spans across various domains, ensuring comprehensive solutions to meet your needs. With a focus on innovation and excellence, we strive to make a significant impact in our field.
        </p>
      </div>
      <div className={styles.imageContainer}>
      {<Image src="/images/car.jpeg" alt="SAE Logo" width={300} height={300} />}
      </div>
    </div>
  );
};

export default Welcome;
