// components/ContactUs.tsx
import styles from './ContactUs.module.css';
import Image from 'next/image';

const ContactUs = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <section className={styles.contactSection}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <Image src="/images/car.jpeg" alt="SAE Logo" width={400} height={400} />
        </div>
        <div className={styles.address}>
          <h3>Our Address</h3>
          <p>123 Your Street</p>
          <p>Your City, Your Country</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
        <div className={styles.contactInfo}>
          <h3>Get in Touch</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      
    </section>
  );
};

export default ContactUs;
