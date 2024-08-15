import React from 'react';
import styles from './Cars.module.css';
import CarFeatures from './CarFeatures';

const carsData = [
  {
    id: 1,
    name: 'Car 1',
    description: 'This is the description of Car 1. It is known for its speed and reliability.',
    imageUrl: '/path/to/car1-image.jpg', 
  },
  {
    id: 2,
    name: 'Car 2',
    description: 'This is the description of Car 2. It is known for its luxury and comfort.',
    imageUrl: '/path/to/car2-image.jpg', 
  },
  {
    id: 3,
    name: 'Car 3',
    description: 'This is the description of Car 3. It is known for its off-road capabilities.',
    imageUrl: '/path/to/car3-image.jpg', 
  },
  {
    id: 4,
    name: 'Car 4',
    description: 'This is the description of Car 4. It is known for its fuel efficiency and design.',
    imageUrl: '/path/to/car4-image.jpg',
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
              <h2 className={styles.carName}>{car.name}</h2>
              <p className={styles.carDescription}>{car.description}</p>
            </div>
          </section>
          <section className={styles.section}>
            <CarFeatures />
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cars;
