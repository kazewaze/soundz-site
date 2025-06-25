import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  { name: 'Docs', href: '/docs' },
  { name: 'Examples', href: '/examples' },
  { name: 'GitHub', href: 'https://github.com/kazewaze/soundz' }
];

function Hamburger({ open, toggle, refProp }) {
  return (
    <button
      ref={refProp}
      className={`${styles.hamburger} ${open ? styles.open : ''}`}
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <span />
      <span />
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/s-icon.svg"
            alt="Soundz S Icon Logo"
            width={45}
            height={45}
          />
        </Link>

        <nav
          ref={navRef}
          className={`${styles.nav} ${open ? styles.open : ''}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Hamburger open={open} toggle={() => setOpen(!open)} refProp={buttonRef} />
      </div>
    </header>
  );
}