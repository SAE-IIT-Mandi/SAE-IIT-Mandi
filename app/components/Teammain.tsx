// components/ContactUs.tsx
import styles from './Teammain.module.css';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.leftSide}>
        <div className={styles.picContainer}>
          <Image src="/images/car.jpeg" alt="Team Picture" width={300} height={300} />
        </div>
        <div className={styles.address}>
          <h3>SAE,IIT Mandi</h3>
          <p>IIT Mandi Racing</p>
        </div>
      </div>
      <div className={styles.rightSide}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <h2>Contact Us</h2>
        <div className={styles.contactInfo}>
          <h3>Get in Touch</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>LinkeIn</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
