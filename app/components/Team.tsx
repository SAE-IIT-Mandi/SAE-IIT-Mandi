import React from 'react';
import styles from './Team.module.css';
import Image from 'next/image';

const Team: React.FC = () => {
    return (
        <div className={styles.teamSection}>
            <div className={styles.teamContent}>
                <h2 className={styles.teamHeading}>The Team</h2>
                <p className={styles.teamSubheading}>
                    Driving Innovation, Powering Sustainability: IIT Mandi Racing
                </p>
                <ul className={styles.teamPoints}>
                    <li className={styles.teamPoint}>
                        <span className={styles.checkIcon}>✔</span>
                        Aiming for innovative, sustainable solutions.
                    </li>
                    <li className={styles.teamPoint}>
                        <span className={styles.checkIcon}>✔</span>
                        Pioneering the future of racing with passion and excellence.
                    </li>
                    <li className={styles.teamPoint}>
                        <span className={styles.checkIcon}>✔</span>
                        Designing sustainable electric mobility, propelling India onto the global stage.
                    </li>
                </ul>
            </div>
            <div className={styles.teamImageWrapper}>
                <Image 
                    src="/homepage/team.png" 
                    alt="The Team" 
                    width={500} 
                    height={400} 
                    className={styles.teamImage} 
                />
            </div>
        </div>
    );
}

export default Team;
