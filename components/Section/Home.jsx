import Link from 'next/link';
import ContactContainer from '@components/Contact/ContactContainer.jsx';
import styles from '@styles/Section/Home.module.css';

export default function Home() {
  return (
    <section id={styles.home}>
      <div className={styles['home__name-role']}>
        <p className={styles.home__name}>
          Olá 👋,
          <br />
          eu sou o João Victor Steteler 🇧🇷
        </p>
        <p className={styles.home__role}>DESENVOLVEDOR FULLSTACK</p>
      </div>
      <div>
        <p className={styles.home__summary}>
          “Minimalista, perfeccionista, altruísta, organizado,
          regrado e professor nas horas vagas xD.”
        </p>
        <Link href="#about" className={styles.home__link}>
          SAIBA MAIS ➜
        </Link>
      </div>
      <ContactContainer />
    </section>
  );
}
