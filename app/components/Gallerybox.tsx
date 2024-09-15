"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from './Gallerybox.module.css';

const Gallerybox: React.FC = () => {
  const [images, setImages] = useState<string[]>([
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
  ]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to shuffle images
  const shuffleImages = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to handle image click
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  // Function to close the overlay
  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  // Shuffle images every 5 seconds with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => shuffleImages(prevImages));
    }, 5000); // Adjust the interval time in milliseconds (5000ms = 5s)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <div className={styles.galleryContainer}>
        {images.map((src, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleImageClick(src)} // Set the clicked image
            style={{ animationDelay: `${index * 0.1}s` }} // Stagger animation for each card
          >
            <Image
              src={src}
              alt={`Gallery item ${index}`}
              layout="fill"
              className={styles.image}
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
