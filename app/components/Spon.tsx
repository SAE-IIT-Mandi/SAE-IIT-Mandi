import React from 'react';
import Image from 'next/image';
import styles from './Spon.module.css';
import Project_card from './Project_card';
import Sponsor_flow from './Sponsor_flow';

const Spon: React.FC = () => {
  return (
    <div>
        {/* Why Sponsor Us Section */}
        <section>
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

        {/* Our Projects Section */}
        <section>
            <h2 className={styles.h2tag}>Our Projects</h2>
            <div className={styles.sponsorCarousel}>
                <div className={styles.carouselTrack}>
                <Project_card  
                  src="/spon/ER7.0.png" 
                  name="SAE Supra 2019" 
                  writeup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum mollitia pariatur adipisci
                            recusandae autem accusamus reiciendis enim quibusdam placeat maxime est animi laborum amet quia deserunt
                            earum, ex," 
                />
                <Project_card  
                  src="/spon/p2.jpg" 
                  name="Quad Torc 2019" 
                  writeup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum mollitia pariatur adipisci
                            recusandae autem accusamus reiciendis enim quibusdam placeat maxime est animi laborum amet quia deserunt
                            earum, ex," 
                />
                <Project_card  
                  src="/spon/p4.jpeg" 
                  name="Enduro 2021" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                <Project_card  
                  src="/spon/p4.jpeg" 
                  name="Enduro 2021" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                <Project_card  
                  src="/spon/p4.jpeg" 
                  name="Enduro 2021" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
            </div>
            </div>
        </section>

        {/* Sponsors Section */}
        <section className={styles.sponsorSection}>
            <Sponsor_flow />
        </section>
    </div>
  );
};

export default Spon;
