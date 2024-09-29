import Navbar from '../components/Navbar';
import CarViewer from '../components/CarViewer';
import Cars from '../components/Cars';
import styles from './Cars.module.css';
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <nav >
                <div>
                    <div ><a href="./index.html#clubs" >Efficycle</a></div>
                    <div ><a href="./index.html#cells" >Formula Bharat</a></div>
                    <div ><a href="./index.html#offerings">Car 1</a></div>
                    <div ><a href="./index.html#Inter-IIT">Car 2</a></div>
                </div>
            </nav>
        <section className={styles.section}>
          <CarViewer />
        </section>
        <Cars />
        
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024  All rights reserved by SAE,IIT Mandi</p>
      </footer>
    </div>
  );
}

