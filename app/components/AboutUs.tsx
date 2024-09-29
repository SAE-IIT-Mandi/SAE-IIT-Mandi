import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
    return (
        <div>
            <section className={styles.section}>
                <h1 className={styles.h2}>About Us</h1>
                <p>The Automobile Club of IIT Mandi is a collective of highly motivated and skilled individuals dedicated to pushing the boundaries of automotive engineering. Fueled by a passion for cutting-edge technology and innovation, our team designs and fabricates high-performance vehicles for national competitions such as SAE SUPRA, EffiCycle, and the upcoming Formula Bharat 2026.
<br></br>
With a history of success in SAE SUPRA (2014, 2019) and EffiCycle (2024), we continually refine our expertise through practical experience and advanced methodologies. Our commitment extends beyond competition; we aim to foster a deep understanding of automotive systems within the broader student community.
<br></br>
We organize expert lectures on vehicle dynamics, and modern automotive technologies and their production directly form Industrial experts like from Hero Motor Corp. We also conduct workshops on live engine demonstration(Pulsar and Royal Enfield Twin Spark 350cc) and essential engineering tools like SolidWorks, MATLAB, and ANSYS. Our hackathons and training sessions provide hands-on experience with advanced simulation, design, and manufacturing processes, enabling the next generation of engineers to lead in the evolving automotive landscape.</p>

                <div className={styles.contact_info}>
                    <h2 className={styles.h2}>Get in Touch</h2>
                    <p>If you have any questions, suggestions, or just want to reach out, feel free to contact us through the details provided below or use the contact form.</p>
                    <p>Email: <a href="mailto:sae@iitmandi.ac.in">sae@iitmandi.ac.in</a></p>
                    <p>Phone: +91-1234567890</p>
                    <p>Address: SAE Club, IIT Mandi, Kamand, Himachal Pradesh, 175075 India</p>
                </div>

            </section>
        </div>
    );
};

export default AboutUs;
