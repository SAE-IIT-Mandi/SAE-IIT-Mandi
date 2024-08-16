import React from 'react';
import styles from './ContactUs.module.css';

const ContacttoUs: React.FC = () => {
    return (
        <div>
            <section className={styles.section}>
                <h1 className={styles.h}>Contact Us</h1>

                <div className={styles.contact_info}>
                    <h2 className={styles.h2}>Get in Touch</h2>
                    <p>If you have any questions, suggestions, or just want to reach out, feel free to contact us through the details provided below or use the contact form.</p>
                    <p>Email: <a href="mailto:sae@iitmandi.ac.in">sae@iitmandi.ac.in</a></p>
                    <p>Phone: +91-1234567890</p>
                    <p>Address: SAE Club, IIT Mandi, Kamand, Himachal Pradesh, 175075 India</p>
                </div>

                <div className={styles.contact_form}>
                    <h2 className={styles.h2}>Send Us a Message</h2>
                    <form action="/submit-form" method="post" className={styles.formin}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows={6} required></textarea>
                        <a href="mailto:sae@iitmandi.ac.in">Submit</a>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContacttoUs;
