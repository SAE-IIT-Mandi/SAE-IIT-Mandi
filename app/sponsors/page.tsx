import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Spon from '../components/Spon';
import styles from '../Home.module.css';

export default function Sponsors() {
  return (
    <div>
      <Navbar />
      <main>
        <Spon />
      </main>
        <Footer />
    </div>
  );
}
