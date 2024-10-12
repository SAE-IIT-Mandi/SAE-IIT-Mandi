import React from "react";
import styles from "./efficycle.module.css";

const Efficycle: React.FC = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.h1} data-text="Efficycle">Efficycle</h1>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>About Efficycle</h2>
          <p>
            Efficycle is an annual competition organized by SAE India,
            challenging engineering students to design and fabricate an
            energy-efficient three-wheeled, human-electric hybrid vehicle. Our
            team aimed to create an innovative and eco-friendly solution,
            focusing on sustainability and efficiency.
          </p>
        </div>

        <div className={styles.work}>
          <div className={`${styles.chassis} ${styles.workItem}`}>
            <div className={styles.heading}>Chassis</div>
            The structural framework of a vehicle that supports the body,
            engine, and other components, providing stability and durability.
          </div>

          <div className={`${styles.electric} ${styles.workItem}`}>
            <div className={styles.heading}>Electric</div>
            Refers to vehicles powered by electric energy, utilizing batteries
            or fuel cells to operate without conventional internal combustion
            engines.
          </div>

          <div className={`${styles.testing} ${styles.workItem}`}>
            <div className={styles.heading}>Testing</div>
            The process of evaluating a vehicle's performance, safety, and
            reliability through various assessments to ensure it meets industry
            standards and regulations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficycle;