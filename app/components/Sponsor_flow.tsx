import React from 'react';
import Image from 'next/image';
import styles from './Spon.module.css';


const Sponsor_flow: React.FC = () => {
    return (
        <div>
            <section className={styles.sponsorSection}>
            <h2 className={styles.h2tag}>Our Proud Sponsors</h2>
            <div className={styles.sponsorCarousel}>
                <div className={styles.carouselTrack}>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.ansys.com/en-in/academic/students/student-teams" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/ansys-cover.jpg" alt="Sponsor 1 Logo" width={100} height={100} />
                    </a>
                </div>
            </div>
        </section>
        </div>
        
    )

};

export default Sponsor_flow;