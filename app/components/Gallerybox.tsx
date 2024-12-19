"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Gallerybox.module.css";

const Gallerybox: React.FC = () => {
  const galleryPaths = Array.from({ length: 35 }, (_, i) => `/gallery/${i + 1}.webp`); 
  const [images, setImages] = useState<string[]>(galleryPaths);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shuffleImages = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => shuffleImages(prevImages));
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className={styles.galleryContainer}>
        {images.map((src, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleImageClick(src)} 
            style={{ animationDelay: `${index * 0.1}s` }} 
          >
            <Image
              src={src}
              alt={`Gallery item ${index}`}
              className={styles.image}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <Image
            src={selectedImage}
            alt="Selected image"
            width={1000}
            height={1000}
            className={styles.overlayImage}
          />
        </div>
      )}
    </>
  );
};

export default Gallerybox;
