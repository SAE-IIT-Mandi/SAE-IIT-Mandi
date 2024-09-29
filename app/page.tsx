import Navbar from './components/Navbar';
import styles from './Home.module.css';
import WhoAreWe from './components/WhoAreWe';
import Sponser_flow from './components/Sponsor_flow';
import Project_card from './components/ProjectCard';
import Welcome from './components/Welcome';
import Cordi from './components/Cordi';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
          <Welcome />
          <WhoAreWe />

            <h2 className={styles.h2tag}>Our Projects</h2>
            <div className={styles.projects}>
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
                </div>
            
          <Sponser_flow />

          
          <Cordi />
      </main>
      <footer className={styles.footer}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <div className="footer-social-icons">
        <a href="https://www.facebook.com/SAEiitmandi/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link github">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/sae.iitmandi/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link youtube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://x.com/sae_iitmandi" target="_blank" rel="noopener noreferrer" className="social-link twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="footer-text">Copyright &copy; 2024 All rights reserved by SAE, IIT Mandi</p>
    </footer>
    </div>
  );
}
