import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
    return (
        <div>
            <section className={styles.aboutSection}>
                <h1>About Us</h1>
                <p>  The Automobile Club of IIT Mandi is a dynamic collective of highly skilled and driven individuals, united by a shared passion for pushing the frontiers of automotive engineering. With a focus on cutting-edge technology and innovation, our team excels in designing and fabricating high-performance vehicles for renowned national competitions such as SAE SUPRA, EffiCycle, and the forthcoming Formula Bharat 2026.
                    <br></br>
                    Having achieved significant success in SAE SUPRA (2014, 2019) and EffiCycle (2024), we continuously hone our expertise through rigorous hands-on experience and advanced engineering methodologies. Our mission extends beyond mere competition; we are dedicated to cultivating a profound understanding of automotive systems within the wider student body.
                    <br></br>
                    To that end, we regularly organize expert lectures on vehicle dynamics, modern automotive technologies, and manufacturing processes, featuring industry leaders from organizations like Hero MotorCorp. Additionally, we host workshops that offer live engine demonstrations (including Pulsar and Royal Enfield Twin Spark 350cc engines), alongside training in essential engineering tools such as SolidWorks, MATLAB, and ANSYS. Through hackathons and immersive training sessions, we provide students with practical experience in advanced simulation, design, and manufacturing, equipping the next generation of engineers to lead in the rapidly evolving world of automotive engineering.
                    <br></br>
                    If you have any questions, suggestions, or just want to reach out, feel free to contact us through the details provided below.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
