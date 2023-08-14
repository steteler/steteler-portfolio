import Link from 'next/link';
import ContactContainer from '@components/Contact/ContactContainer.jsx';
import Divider from '@components/Divider.jsx';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.all}>
      <div className={styles.home}>
        <section className={styles.home__info}>
          <div className={styles['home__name-role']}>
            <p className={styles.home__name}>
              Olá 👋,
              <br />
              eu sou o João Victor Steteler 🇧🇷
            </p>
            <p className={styles.home__role}>DESENVOLVEDOR WEB FULLSTACK</p>
          </div>
          <div>
            <p className={styles.home__summary}>
              “Minimalista, perfeccionista, altruísta, organizado,
              regrado e professor nas horas vagas xD.”
            </p>
            <Link href="#about" className={styles['home__know-more']}>
              <span>↳ </span>
              <span className={styles['home__know-more-text']}>SAIBA MAIS</span>
            </Link>
          </div>
          <ContactContainer />
        </section>
        <Divider color="white" />
      </div>
    </div>
  );
}
