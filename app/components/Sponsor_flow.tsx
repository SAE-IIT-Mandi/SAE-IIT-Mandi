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
                    <a href="https://altair.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Altair-Cover.jpg" alt="Sponsor 2 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.brose.com/de-en/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/brose_cov.jpg" alt="Sponsor 3 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.exponent.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/exponent-banner.jpg" alt="Sponsor 4 Logo" width={100} height={100} />
                    </a>
                    <a href="https://in.mathworks.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Mathworks-website-banner-1-1024x576.jpg" alt="Sponsor 5 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.coexlion.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/coexlion-cover (1).jpg" alt="Sponsor 6 Logo" width={100} height={100} />
                    </a>
                    <a href="https://fabheads.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/cover-1-1024x1024.jpg" alt="Sponsor 7 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.mts.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/MTS-cover.jpg" alt="Sponsor 8 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.fabheads.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Fabheads-Logo-sq.png" alt="Sponsor 9 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.flomic.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Flomic_Logo-sq-hq-1-e1543397742306.jpg" alt="Sponsor 10 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.flomicgroup.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Flomic_new_logo-sq.jpg" alt="Sponsor 11 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.godrej.com/godrejandboyce/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/godrej.jpg" alt="Sponsor 12 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.siemens.com/in/en.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC21Lu7JdtPzHyfDNhz02cqgF01Uwgq3_KIBMy2oYSa2xFspS1sfPckaAiEHEALw_wcB&acz=1&gad_source=1" target="_blank" rel="noopener noreferrer">
                        <img src="/spon/sie-logo-claim-petrol-rgb-SITE.jpg" alt="Sponsor 13 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.studioclockwork.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/StudioClockwork (1).jpg" alt="Sponsor 14 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.pravaig.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Web.jpg" alt="Sponsor 15 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.digikey.in/?utm_adgroup=General&utm_source=google&utm_medium=cpc&utm_campaign=EN_Brand_Digi-Key&utm_term=digikey&productid=&utm_content=General&utm_id=go_cmp-146823664_adg-9151199224_ad-362718146368_kwd-13013986_dev-c_ext-_prd-_sig-Cj0KCQjwwuG1BhCnARIsAFWBUC2YDcofSTokFhwNMMPsHUXdZkGbKPipwYGjpN-mmqxRT4IHQNSCcvcaAjDuEALw_wcB&gad_source=1&gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC2YDcofSTokFhwNMMPsHUXdZkGbKPipwYGjpN-mmqxRT4IHQNSCcvcaAjDuEALw_wcB" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Website-Feature-Image (1).png" alt="Sponsor 16 Logo" width={100} height={100} />
                    </a>
                    <a href="https://www.epsilon.com/apac" target="_blank" rel="noopener noreferrer">
                        <img src="/spon/Website-Feature-Image.jpg" alt="Sponsor 17 Logo" width={100} height={100} />
                    </a>
                    <a href="https://igdrones.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/Website-Feature-Image.png" alt="Sponsor 18 Logo" width={100} height={100} />
                    </a>
                    <a href="https://efillelectric.com/usa/" target="_blank" rel="noopener noreferrer">
                        <Image src="/spon/efillelectric.png" alt="Sponsor 19 Logo" width={100} height={100} />
                    </a>
                </div>
            </div>
        </section>
        </div>
        
    )

};

export default Sponsor_flow;