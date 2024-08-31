import React from "react";
import Image from "next/image";
import styles from "./FormulaBharat.module.css"; 

const FormulaBharat = () => {
  return (
    <div>
      <header>
        <h1 className={styles.distortedText}>Formula Bharat</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/gallery/supra.jpg" alt="Formula Bharat" width={600} height={400} />
        </div>
        <div className={styles.content}>
          <h2>
            We have one racing car in the books and another in the making, as
            IIT Mandi continues to lead in innovation and speed.
          </h2>
          <p>
            We are embarking on an exciting journey to design and build our very
            own Formula Bharat car. This project is not just about creating a
            high-performance race car; it's about pushing the boundaries of
            engineering, innovation, and teamwork. Our team is dedicated to
            crafting a vehicle that not only meets the rigorous standards of the
            Formula Bharat competition but also showcases our passion for
            motorsport and our commitment to excellence. Stay tuned as we bring
            our vision to life, one component at a time.
          </p>
        </div>
      </div>

      <div className={styles.sectionDivider}>
        <hr />
        <span className={styles.sectionTitle}>What is it about</span>
      </div>

      <div className={styles.content}>
        <p>
          Formula Bharat is an Indian Formula Student-style engineering design
          competition that provides a real-world engineering challenge to
          engineering undergraduates and postgraduates that reflects the steps
          involved in the entire process of automobile development: from design
          and engineering to production and testing to marketing and
          performance; and a platform for industrial experts to reach out to the
          next generation of innovators. Teams are tasked with the development
          of a small Formula Style race car. Students realize their talent
          through such an experience, making them proven candidates for future
          technocrats, entrepreneurs, designers, innovators, and leaders.
        </p>
      </div>

      <div className={styles.lineDivider}></div>

      <div className={styles.photoGallery}>
        <div className={styles.photo}>
          <a href="/specs-2025.html">
            <Image src="/gallery/supra.jpg" alt="Formula Bharat 2025" width={300} height={200} />
            <p>Formula Bharat 2025</p>
          </a>
        </div>
        <div className={styles.photo}>
          <a href="/specs-2019.html">
            <Image src="/gallery/supra.jpg" alt="Formula Bharat 2019" width={300} height={200} />
            <p>Formula Bharat 2019</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormulaBharat;
