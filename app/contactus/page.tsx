// app/contact-us/page.tsx
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import styles from '../Home.module.css';


export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

