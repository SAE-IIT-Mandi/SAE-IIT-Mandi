"use client"
import { useEffect } from 'react';
import styles from './Vision.module.css';
import Image from 'next/image';

const Vision = () => {
  useEffect(() => {
    const textContainer = document.querySelector(`.${styles.textContainer}`);
    const imageContainer = document.querySelector(`.${styles.imageContainer}`);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains(styles.textContainer)) {
            entry.target.classList.add(styles.fadeInLeft);
          } else if (entry.target.classList.contains(styles.imageContainer)) {
            entry.target.classList.add(styles.fadeInRight);
          }
          observer.unobserve(entry.target);
        }
      });
    });

    if (textContainer) observer.observe(textContainer);
    if (imageContainer) observer.observe(imageContainer);

    return () => {
      if (textContainer) observer.unobserve(textContainer);
      if (imageContainer) observer.unobserve(imageContainer);
    };
  }, []);

  return (
    <section className={styles.vision}>
      <div className={styles.textContainer}>
        <h1>Vision and Mission</h1>
        <p>
          The vision of the Automobile Club of IIT Mandi is to become a leading force in automotive innovation by cultivating a culture of creativity, engineering excellence, and hands-on experience. We aim to empower students to push technological boundaries and make a lasting impact in the world of automotive design and sustainable mobility solutions.
        </p>
        <div className={styles.links}>
          <a href="gallery" className={styles.link}>Gallery</a>
          <a href="projects" className={styles.link}>Our Projects</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src="/images/vision.webp" alt="SAE Logo" width={500} height={200} />
      </div>
    </section>
  );
};

export default Vision;
