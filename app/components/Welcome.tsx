import styles from './Welcome.module.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.textContainer}>
       <div className={styles.headingDiv}> <h1 className={styles.heading}>Raptor Racing IIT Mandi</h1></div>
        <p className={styles.paragraph}>
          Welcome to the SAE Club - IIT Mandi
          <br></br>
          We are driven by innovation, passion, and the relentless pursuit of automotive and mobility excellence. Our club serves as a dynamic platform where students collaborate, learn, and build cutting-edge engineering solutions for the automotive world.
          <br></br>
          We are a team of enthusiastic engineers united by our love for mobility and technology. Our members come from diverse engineering backgrounds, pooling their expertise to design, build, and compete in national and international automotive competitions such as Formula Bharat, Efficycle, and SAE Supra. 
        </p>
       
      </div>
      <Image src="/images/SAE-rriitm.webp" alt="IIT Mandi RR Logo" className={styles.image}  width={300} height={200}/>
    </div>
  );
};

export default Welcome;
