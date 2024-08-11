// app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/Sae.png" alt="SAE Logo" width={100} height={100} />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sponsorship">Sponsorship</Link></li>
          <li><Link href="/contactus">Contact Us</Link></li>
          <li><a href="https://www.sae.org" target="_blank" rel="noopener noreferrer">SAE Website</a></li>
          <li><Link href="/fourth-link">Fourth Link</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
