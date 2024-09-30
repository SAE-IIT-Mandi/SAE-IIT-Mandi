"use client"
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import SAETeam from '../components/SAETeam';
import Footer from '../components/Footer';
import styles from '../Home.module.css';

export default function ContactUs() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');

    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.birds.min.js';

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    script2.onload = () => {
      if (window.VANTA && window.THREE) {
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: 0xff4d4d,
          color2: 0xff4d4d,
          colorMode: 'lerpGradient',
          birdSize: 1.1,
          wingSpan: 24.0,
          speedLimit: 4.0,
          separation: 35.0,
        });
      }
    };

    return () => {
      if (window.VANTA && vantaRef.current) {
        window.VANTA.destroy();
      }
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main ref={vantaRef}>
        <SAETeam />
      </main>
      <Footer />
    </div>
  );
}
