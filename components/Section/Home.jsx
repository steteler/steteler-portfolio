import Link from 'next/link';
import ContactContainer from '@components/Contact/ContactContainer.jsx';
import Divider from '@components/Divider.jsx';
import styles from '@styles/Section/Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles['section-default-config']}>
        <section className={styles.home__info}>
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
            <Link href="#about" className={styles['home__know-more']}>
              <span className={styles['home__know-more-text']}>SAIBA MAIS</span>
              <span> ➜</span>
            </Link>
          </div>
          <ContactContainer />
        </section>
      </div>
      <Divider />
    </section>
  );
}
