import styles from "./Cordi.module.css";
import Image from "next/image";

const Cordi: React.FC = () => {
  return (
    <section className={styles.whoAreWeSection}>
    <div className={styles.imageContainer}>
      <Image src="/team/Vinamra.jpg" alt="SAE Logo" width={300} height={300} />
      </div>
      <div className={styles.textContainer}>
        <h1>Cordinator's Note</h1>
        <p>
        "Welcome to our club! We are passionate about fostering an inclusive community where everyone has the opportunity to explore, learn, and engage with our diverse projects and activities. Feel free to get in touch if you have any questions or would like to get involved. We're always open to new ideas and collaborations, and your input helps us make this community even stronger."
        </p>
        <div className={styles.links}>
          <a href="contactus" className={styles.link}>About Us</a>
        </div>
      </div>
      
    </section>
  );
};

export default Cordi;


