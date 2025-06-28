import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '0', marginBottom: '15px'}}>
        <a href="https://github.com/kazewaze/soundz" target="_blank" rel="noopener noreferrer">
          <img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/kazewaze/soundz" />
        </a>
        <a href="https://www.npmjs.com/package/soundz" target="_blank" rel="noopener noreferrer">
          <img alt="npm version" src="https://img.shields.io/npm/v/soundz?style=flat&labelColor=222222&color=ff0072" />
        </a>
      </div>
      <p>MIT © {new Date().getFullYear()} Kaycee Ingram</p>
      <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5px'}}>
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
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7.5px'}}>
        <img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/kazewaze/soundz" />
        <img alt="npm version" src="https://img.shields.io/npm/v/soundz?style=flat&color=ff0072" />
      </div> */}
    </footer>
  );
}