'use client';
import React, { useState } from 'react';
import styles from './Projectdetails.module.css';

interface WorkItem {
  heading: string;
  description: string;
  image?: { src: string; alt: string }; 
}

interface ProjectDetailsProps {
  title: string;
  description: string;
  workDetails: WorkItem[][];
  images: { src: string; alt: string }[];
}

const Project: React.FC<ProjectDetailsProps> = ({
  title = "Project Title",
  description = "Project Description",
  workDetails = [],
  images = []
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{description}</p>
        </div>
        <div
          className={styles.heroBg}
        />
      </div>

      <div className={styles.content}>
        {workDetails && workDetails.length > 0 && workDetails.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={styles.section}
          >
            {section && section.map((item, itemIndex) => (
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
                {item.image && (
                  <div className={styles.workItemImage}>
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={styles.workItemDecoration} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
