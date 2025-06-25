import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>MIT © {new Date().getFullYear()} Kaycee Ingram</p>
      <p>
        Built with
        <Image
          className={styles.builtWithIcon}
          src="/icons/heart.svg"
          alt="Heart Icon (For Footer Info)"
          width={20}
          height={20}
        />
        by
        <a href="https://kayceeingram.com" target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.kayceeImage}
            src="/kaycee.svg"
            alt="Kaycee Ingram Logo (For Footer)"
            width={150}
            height={35}
          />
        </a>
      </p>
    </footer>
  );
}