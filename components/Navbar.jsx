/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import Link from 'next/link';
import styles from '@styles/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <header>
      <nav className={`${styles.menu} ${isOpen && styles.open}`} onClick={toggleOpen}>
        <button type="button" className={styles.menu__icon}>
          <span />
          <span />
          <span />
        </button>
        <ul className={styles.menu__list}>
          <Link href="#home"><li>Home</li></Link>
          <Link href="#about"><li>Sobre</li></Link>
          <Link href="#project"><li>Projetos</li></Link>
          <Link href="#skill"><li>Habilidades</li></Link>
          <Link href="#experience"><li>Experiências</li></Link>
          <Link href="#footer"><li>Footer</li></Link>
        </ul>
      </nav>
    </header>
  );
}
