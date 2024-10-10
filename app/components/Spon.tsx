import React from 'react';
import styles from './Spon.module.css';
import Sponsor_flow from './Sponsor_flow';

const Spon: React.FC = () => {
  return (
    <div>
        <section className={styles.section}>
            <h2 className={styles.h2tag}>Why Sponsor Us?</h2>
            <p>
            The SAE Club of IIT Mandi is a hub of innovation, creativity, and technical excellence. Our members are
            committed to pushing the boundaries of automotive and aerospace engineering through cutting-edge projects,
            workshops, and competitions. By sponsoring us, you are investing in the future of technology, fostering the
            next generation of engineers, and gaining unparalleled visibility among a talented pool of students and
            faculty. Your support helps us continue to participate in national and international competitions, develop
            sustainable technologies, and host events that bring together experts from across the industry.
            </p>
            <p>
            Sponsoring the IIT Mandi SAE Club is an opportunity to invest in the next generation of innovative engineers and automotive leaders. By supporting our club, sponsors align with a team dedicated to excellence in design, fabrication, and technology, with a proven track record in prestigious competitions like SAE SUPRA and Formula Bharat. Your sponsorship helps us push boundaries in automotive engineering, while also providing visibility at national events and fostering a culture of creativity and hands-on learning. Partnering with us means contributing to cutting-edge solutions and the future of sustainable mobility. 
            </p>
        </section>
            <Sponsor_flow />
          
    </div>
  );
};

export default Spon;
