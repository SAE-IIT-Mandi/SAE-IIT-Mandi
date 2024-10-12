
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
                  src="/gallery/22.webp" 
                  name="SAE Supra 2019" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                <Project_card  
                  src="/gallery/22.webp" 
                  name="Efficycle 2024" 
                  writeup=" rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                <Project_card  
                  src="/gallery/22.webp" 
                  name="SAE Forumula Bharat" 
                  writeup="rem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus suscipit eum cum voluptas
                            harum, quod optio at voluptates excepturi esse voluptatem illum ea obcaecati nesciunt quam maxime. Quasi
                            temporibus ditiu" 
                />
                <Project_card  
                  src="/gallery/22.webp" 
                  name="Efficycle 2019" 
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
