'use client';
import React, { useState } from 'react';
import styles from './Projectdetails.module.css';

interface WorkItem {
  heading: string;
  description: string;
}

interface ProjectData {
  title: string;
  description: string;
  workDetails: WorkItem[][];
  images: {
    src: string;
    alt: string;
  }[];
}

interface ProjectDetailsProps {
  projectKey: string;
  projectData: ProjectData;
}

const Project: React.FC<ProjectDetailsProps> = ({
  projectKey,
  projectData
}) => {
  const { title, description, workDetails, images } = projectData;

  const imagesPerSection = Math.floor(images.length / workDetails[0].length);

  const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>(
    workDetails[0].map((_, index) => index * imagesPerSection)
  );

  const cycleImage = (itemIndex: number) => {
    setCurrentImageIndexes(prev => {
      const newIndexes = [...prev];
      const startIndex = itemIndex * imagesPerSection;
      const endIndex = startIndex + imagesPerSection;
      const currentIndex = newIndexes[itemIndex];
      
      // Cycle through images only within the section's range
      let nextIndex = currentIndex + 1;
      if (nextIndex >= endIndex || nextIndex >= images.length) {
        nextIndex = startIndex;
      }
      
      newIndexes[itemIndex] = nextIndex;
      return newIndexes;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{description}</p>
        </div>
        {images.length > 0 && (
          <div
            className={styles.heroBg}
          />
        )}
      </div>

      <div className={styles.content}>
        {workDetails.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={styles.section}
          >
            {section.map((item, itemIndex) => {
              const startImageIndex = itemIndex * imagesPerSection;
              const hasImages = startImageIndex < images.length;

              return (
                <div
                  key={itemIndex}
                  className={styles.workItem}
                >
                  <div className={styles.workItemContent}>
                    <h3 className={styles.workItemHeading}>
                      {item.heading}
                    </h3>
                    <p className={styles.workItemText}>
                      {item.description}
                    </p>
                  </div>
                  {hasImages && (
                    <div 
                      className={styles.workItemImage}
                      onClick={() => cycleImage(itemIndex)}
                    >
                      <img
                        src={images[currentImageIndexes[itemIndex]].src}
                        alt={images[currentImageIndexes[itemIndex]].alt}
                        loading="lazy"
                      />
                      <div className={styles.imageCounter}>
                        {`Image ${(currentImageIndexes[itemIndex] % imagesPerSection) + 1} of ${imagesPerSection}`}
                      </div>
                    </div>
                  )}
                  <div className={styles.workItemDecoration} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;