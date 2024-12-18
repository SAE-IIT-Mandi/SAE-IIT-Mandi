import React from 'react';
import styles from './Cars.module.css';
import Image from 'next/image';
import Link from 'next/link';
const carsData = [
  {
    id: 1,
    name: 'SAE Supra',
    description: 'This is the description of Car 1. It is known for its speed and reliability.',
    imageUrl: '/path/to/car1-image.jpg', 
    feature1:"",
    feature2:"",
    feature3:"",
    feature4:"",
  },
  {
    id: 2,
    name: 'Car 2',
    description: 'This is the description of Car 2. It is known for its luxury and comfort.',
    imageUrl: '/path/to/car2-image.jpg', 
    feature1:"",
    feature2:"",
    feature3:"",
    feature4:"",
  },
  {
    id: 3,
    name: 'Car 3',
    description: 'This is the description of Car 3. It is known for its off-road capabilities.',
    imageUrl: '/path/to/car3-image.jpg', 
    feature1:"",
    feature2:"",
    feature3:"",
    feature4:"",
  },
  {
    id: 4,
    name: 'Car 4',
    description: 'This is the description of Car 4. It is known for its fuel efficiency and design.',
    imageUrl: '/path/to/car4-image.jpg',
    feature1:"",
    feature2:"",
    feature3:"",
    feature4:"",
  }
];

const Cars: React.FC = () => {
  return (
    <div className={styles.container}>
      {carsData.map(car => (
        <React.Fragment key={car.id}>
          <section className={styles.section}>
            <img src={car.imageUrl} alt={car.name} className={styles.carImage} />
            <div className={styles.carDetails}>
            <h2 className={styles.carName}><Link href={`/projectDetail_${car.id}`}>{car.name}</Link></h2>
              <p className={styles.carDescription}>{car.description}</p>
            </div>
          </section>
          <section className={styles.featuresSection}>
              <div className={styles.featureCard}>
                <h2>{car.feature1}</h2>
              </div>
              <div className={styles.featureCard}>
                <h2>{car.feature2}</h2>
              </div>
              <div className={styles.logoContainer}>
                {<Image src="/images/Sae.png" alt="SAE Logo" width={200} height={200} />}
              </div>
              <div className={styles.featureCard}>
                <h2>{car.feature3}</h2>
              </div>
              <div className={styles.featureCard}>
                <h2>{car.feature4}</h2>
              </div>
            </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cars;
