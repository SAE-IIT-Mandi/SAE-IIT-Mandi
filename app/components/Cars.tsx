import React from 'react';
import styles from './Cars.module.css';
import Image from 'next/image';
import Link from 'next/link';
const carsData = [
  {
    id: 'saeSupra',
    name: 'SAE Supra 2019',
    description: 'The Raptor Racing team from IIT Mandi participated in the SUPRA SAEINDIA 2019 competition with the goal of creating a race car that balances performance, safety, and cost-effectiveness. Designed for non-professional weekend racers, the Eagle 1.0 offers a robust, affordable, and reliable solution, providing high cornering speed, acceleration, and minimal maintenance.Click on the Car Name for more details.',
    imageUrl: '/homepage/sae-supra.webp',
    feature1: "Chassis made from high-tensile 4130 mild steel for enhanced torsional stiffness.",
    feature2: "Engine powered by a Royal Enfield 500cc carburetor-based engine for reliability and low-cost maintenance.",
    feature3: "Innovative braking system using front disc and rear drum brakes with 70% front braking force for optimized stopping performance.",
    feature4: "Safety-focused design with dry powder fire extinguisher, impact-absorbing roll cage, and quick-release steering wheel.",
  },
  {
    id: 'efficycle23',
    name: 'Efficycle 2023',
    description: 'Efficycle 2023 is a hybrid electric and human-powered vehicle designed for sustainable urban mobility. Combining electric power with human pedal effort, this eco-friendly solution offers both performance and versatility, with features such as a stable tadpole configuration, comfortable seating, and advanced safety systems, making it a perfect solution for modern transportation challenges.Click on the Car Name for more details.',
    imageUrl: '/homepage/efficycle-23.webp',
    feature1: "Hybrid drivetrain with a 48V battery and BLDC motor, achieving a top speed of 36 km/h.",
    feature2: "Human-powered drivetrain with independent powertrains for driver and co-driver, enhancing flexibility and efficiency.",
    feature3: "Mechanical disc brakes on all wheels for superior safety and handling in various conditions.",
    feature4: "Comfortable ergonomic seating with soft foam material, optimized for long rides and driver ease.",
  },
  {
    id: 'efficycle24',
    name: 'Efficycle 2024',
    description: 'Efficycle 2024 is the next iteration of IIT Mandi’s hybrid vehicle, designed to seamlessly combine manual and electric power for optimized performance. With its advanced chassis design, refined suspension, and custom power transmission system, Efficycle 2024 is tailored for both urban mobility and off-road adventures, providing a sustainable, versatile, and comfortable travel solution.Click on the Car Name for more details.',
    imageUrl: '/homepage/efficycle-24.webp',
    feature1: "Tadpole configuration with dual front wheels for enhanced stability on banked surfaces and rough terrains.",
    feature2: "Advanced suspension system with a double wishbone front suspension and a fork suspension at the rear, optimized for comfort and performance.",
    feature3: "Custom-designed Ackermann steering mechanism for reduced effort and precision handling.",
    feature4: "Innovative power transmission system ensuring seamless switching between manual pedaling and electric propulsion.",
  },
  {
    id: 'formulaBharat',
    name: 'Formula Bharat (In Progress)',
    description: 'The Formula Bharat project represents IIT Mandi’s ambitious entry into the realm of competitive motorsports. Currently under development, this race car is a testament to the team’s relentless pursuit of innovation and engineering excellence.Click on the Car Name for more details.',
    imageUrl: '/homepage/formula-bharat.webp',
    feature1: "Details to be revealed upon project completion.",
    feature2: "Stay tuned for exciting updates as the project progresses.",
    feature3: "Engineering efforts are ongoing to ensure top-notch performance.",
    feature4: "The team is committed to delivering a cutting-edge solution.",
  }
];


const Cars: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.headNote}><span>(Click on the Car Name for more details)</span></div> */}
      {carsData.map(car => (
        <React.Fragment key={car.id}>
          <section className={styles.carSection}>
            <Image src={car.imageUrl} alt={car.name} className={styles.carImage} height={200} width={200} />
            <div className={styles.carDetails}>
            <h2 className={styles.carName}><Link href={`/projectDetails/${car.id}`} className={styles.carName}>{car.name}</Link></h2>
              <p className={styles.carDescription}>{car.description}</p>
            </div>
          </section>
          <section className={styles.featureSection}>
              <div className={styles.featureCard}>
                <h3>{car.feature1}</h3>
              </div>
              <div className={styles.featureCard}>
                <h3>{car.feature2}</h3>
              </div>
              <div className={styles.logoContainer}>
                {<Image src="/images/Sae_new.webp" alt="SAE Logo" width={200} height={200} />}
              </div>
              <div className={styles.featureCard}>
                <h3>{car.feature3}</h3>
              </div>
              <div className={styles.featureCard}>
                <h3>{car.feature4}</h3>
              </div>
            </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cars;
