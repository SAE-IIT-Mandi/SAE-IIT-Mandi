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
            Sponsoring the SAE Club at IIT Mandi offers your brand a unique opportunity to associate with a prestigious
            institution and engage with a highly motivated and skilled community. With your sponsorship, we can achieve
            greater milestones, bringing innovation and creativity to new heights. Together, we can drive the future of
            mobility and engineering.
            </p>
        </section>
            <Sponsor_flow />
          
    </div>
  );
};

export default Spon;
