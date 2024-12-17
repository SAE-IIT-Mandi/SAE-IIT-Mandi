import styles from './Welcome.module.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Raptor Racing IIT Mandi</h1>
        <p className={styles.paragraph}>
        The Automobile Club of IIT Mandi is a dynamic team of young engineers driven by a shared passion for automotive innovation and engineering excellence. With a strong commitment to pushing the frontiers of design, fabrication, and cutting-edge technology, we continuously strive to turn visionary concepts into reality. Our journey has seen us compete in elite challenges like SAE SUPRA (2014, 2019), Efficycle (2024), and we are now gearing up for our ambitious participation in Formula Bharat 2026. Through these endeavors, we not only sharpen our technical skills but also foster a culture of creativity, collaboration, and hands-on learning that inspires and uplifts the entire IIT Mandi community. Our goal is to redefine what's possible and leave a lasting impact in the world of automotive engineering.
        </p>
       
      </div>
      <Image src="/images/SAE-rriitm.jpg" alt="IIT Mandi RR Logo" className={styles.image}  width={300} height={200}/>
    </div>
  );
};

export default Welcome;
