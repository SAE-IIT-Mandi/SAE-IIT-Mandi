
import styles from './Home.module.css';
import WhoAreWe from './components/WhoAreWe';
import Sponser_flow from './components/Sponsor_flow';
import Project_card from './components/ProjectCard';
import Welcome from './components/Welcome';
import Cordi from './components/Cordi';
import Team from './components/Team';

export default function Home() {
  return (
      <main className={styles.main}>
          <Welcome />
          <WhoAreWe />

            <h2 className={styles.h2tag}>Our Projects</h2>
            <div className={styles.projects}>
                <Project_card  
                  src="/spon/ER7.0.png" 
                  name="SAE Supra 2019" 
                  writeup="SAE SUPRA 2019 was a landmark event in the world of automotive engineering, bringing together some of the brightest young minds from across India to design, build, and race Formula-style vehicles. For the Automobile Club of IIT Mandi, it was an extraordinary opportunity to showcase innovation, teamwork, and engineering prowess on a national stage. Competing against top institutions, the team pushed the limits of design, fabrication, and performance, gaining invaluable experience in real-world problem-solving and project management. SAE SUPRA 2019 was more than just a competition—it was a celebration of passion, precision, and the relentless pursuit of excellence in automotive engineering." 
                />
                <Project_card  
                  src="/spon/ER7.0.png" 
                  name="Efficycle 2024" 
                  writeup=" Our club's hybrid three-wheeled electric vehicle, Team Trikona, was designed and fabricated for dual operation (battery-powered and manually powered via pedal). Despite being our first competition in three years, we successfully completed the vehicle and presented it at LPU University. Our efforts reflect our resilience and commitment to continuous improvement as we prepare for next year's iteration." 
                />
                <Project_card  
                  src="/spon/ER7.0.png" 
                  name="Enduro 2021" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                <Project_card  
                  src="/spon/ER7.0.png" 
                  name="Enduro 2021" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                </div>
            
          <Team />
          
          <Cordi />
      </main>
  );
}
