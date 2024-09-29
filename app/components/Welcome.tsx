import styles from './Welcome.module.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>IIT Mandi Racing</h1>
        <p className={styles.paragraph}>
          The Automobile Club of IIT Mandi is committed to excellence and innovation in the realm of automotive engineering. We are a dedicated team of young engineers, passionate about pushing the boundaries of design, fabrication, and technology. Our diverse portfolio includes participation in prestigious competitions such as SAE SUPRA (2014, 2019), Efficycle (2024), and our current efforts toward Formula Bharat 2026. Through these initiatives, we foster a culture of innovation, creativity, and hands-on learning that not only advances our own skills but also elevates the entire IIT Mandi community.
        </p>
       
      </div>
      <Image src="/images/main.jpg" alt="Car Image" className={styles.image}  width={300} height={200}/>
    </div>
  );
};

export default Welcome;
