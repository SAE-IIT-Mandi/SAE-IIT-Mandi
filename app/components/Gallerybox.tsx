"use client"
import React from "react";
import Image from "next/image";
import styles from './Gallerybox.module.css';

const Gallerybox: React.FC = () => {
  const images = [
    "/gallery/supra.jpg",
    "/gallery/photo3.jpg",
    "/gallery/photo4.jpg",
    "/gallery/photo5.jpg",
    "/gallery/photo6.jpg",
    "/gallery/photo7.jpg",
    "/gallery/page 1.jpg",
    "/gallery/photo8.jpg",
    "/gallery/page 3.jpg",
    "/gallery/page 4.png",
    "/gallery/sae1.jpg",
    "/gallery/sae2.JPG",
    "/gallery/sae3.jpg",
    "/gallery/sae4.jpg",
    "/gallery/sae5.jpg",
    "/gallery/sae6.jpg",
    "/gallery/sae7.png",
    "/gallery/sae8.jpg",
    "/gallery/sae9.jpg",
    "/gallery/sae7.png",
    "/gallery/sae8.jpg",
    "/gallery/sae9.jpg",
    "/gallery/sae7.png",
    "/gallery/sae8.jpg",
    "/gallery/sae9.jpg",
  ];

  return (
    <div className={styles.galleryContainer}>
      {images.map((src, index) => (
        <div className={styles.card} key={index}>
          <Image
            src={src}
            alt={`Gallery item ${index}`}
            layout="responsive"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallerybox;
