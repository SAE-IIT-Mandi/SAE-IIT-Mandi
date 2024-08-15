import Navbar from './components/Navbar';
import styles from './Home.module.css';
import WhoAreWe from './components/WhoAreWe';
import ContactUs from './components/Teammain';
import Sponser_flow from './components/Sponsor_flow';
import Project_card from './components/Project_card';
import Welcome from './components/Welcome';
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <Welcome />
          <WhoAreWe />

          <section className={styles.section}>
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
            </section>
            
          <Sponser_flow />

          <ContactUs />
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}
