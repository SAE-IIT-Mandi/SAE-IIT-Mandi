
import styles from './Home.module.css';
import Project_card from './components/ProjectCard';
import Welcome from './components/Welcome';
import Cordi from './components/Cordi';
import Team from './components/Team';

export default function Home() {
  return (
      <main className={styles.main}>
          <Welcome />

            <h2 className={styles.heading}>Our Projects</h2>
            <div className={styles.projects}>
                <Project_card  
                  src="/homepage/sae-supra.png" 
                  name="SAE Supra 2019" 
                  writeup="In 2019, the SAE Club of IIT Mandi designed and built a Formula-style race car for the SAE Supra competition. This project highlighted our team's engineering skills, teamwork, and passion for motorsport innovation." 
                />
                <Project_card  
                  src="/homepage/efficycle-23.png" 
                  name="Efficycle 2023" 
                  writeup="In 2023, the SAE Club of IIT Mandi developed a hybrid electric and pedal-powered vehicle for the Efficycle competition. Designed for two passengers, this eco-friendly vehicle combines stability, safety, and ease of maneuverability with a unique tadpole configuration. " 
                />
                <Project_card  
                  src="/homepage/efficycle-24.png" 
                  name="Efficycle 2024" 
                  writeup="Continuing our commitment to sustainable innovation, the SAE Club of IIT Mandi participated in Efficycle 2024 making improvements in the previous vehicle. The vehicle featured a compact, ergonomic design with a waterproof shell and enhanced maneuverability for urban use." 
                />
                <Project_card  
                  src="/homepage/formula-bharat.png" 
                  name="SAE Formula Bharat" 
                  writeup="The SAE Club of IIT Mandi is gearing up for Formula Bharat EV 2026, focusing on designing and building an electric Formula-style race car. With cutting-edge technology and teamwork, we aim to compete at the forefront of electric motorsport." 
                />
                </div>
            
          <Team />
          
          <Cordi />
      </main>
  );
}
