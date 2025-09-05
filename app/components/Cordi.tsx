import Link from "next/link";
import styles from "./Cordi.module.css";
import Image from "next/image";

const Cordi: React.FC = () => {
  return (
    <section className={styles.cordiSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/team/sanskritiCordi.jpg"
          alt="SAE Logo"
          width={300}
          height={0}
          style={{ height: "auto" }}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>Coordinator's Note</h2>
        <p>
          Welcome to IIT Mandi SAE Club's official webpage! As the Coordinator,
          I am honored to present our journey of innovation and engineering
          excellence. This platform highlights our projects that showcase the
          dedication and creativity of our team in transforming ideas into
          reality,and our valued sponsors, whose support fuels our aspirations.
          At SAE IIT Mandi, we are driven by a passion for pushing the
          boundaries of automotive engineering and fostering sustainable
          technological advancements.Through this website, we aim to connect
          with enthusiasts, professionals, and organizations to inspire
          collaboration and shape the future of engineering. Thank you for being
          a part of our journey!{" "}
        </p>
        <div className={styles.links}>
          <Link href="/aboutUs" className={styles.link}>
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cordi;
