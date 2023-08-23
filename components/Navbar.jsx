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
        <button
          aria-label="Abrir / Fechar menu"
          type="button"
          className={styles.menu__icon}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={styles.menu__list}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#project">Projetos</Link></li>
          <li><Link href="#skill">Habilidades</Link></li>
          <li><Link href="#experience">Experiências</Link></li>
          <li><Link href="#footer">Footer</Link></li>
        </ul>
      </nav>
    </header>
  );
}
