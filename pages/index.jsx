import Link from 'next/link';
import ContactContainer from '@components/Contact/ContactContainer.jsx';
import Divider from '@components/Divider.jsx';
import styles from '@styles/Home.module.css';

export default function Home() {
  const colors = {
    white: '#F7F7F7',
    black: '#100C0C',
  };

  return (
    <main>
      <section className={styles.home}>
        <div className={`${styles.home__content} ${styles['section-default-config']}`}>
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
        </div>
        <Divider color={colors.black} />
      </section>

      <section className={styles.about} id="about">
        <div className={`${styles.about__content} ${styles['section-default-config']}`}>
          <h1>SOBRE</h1>
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.white} />
      </section>

      <section className={styles.project}>
        <div className={`${styles.project__content} ${styles['section-default-config']}`}>
          <h1>PROJETOS</h1>
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.black} />
      </section>

      <section className={styles.skill}>
        <div className={`${styles.skill__content} ${styles['section-default-config']}`}>
          <h1>HABILIDADES</h1>
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.white} />
      </section>

      <section className={styles.experience}>
        <div className={`${styles.experience__content} ${styles['section-default-config']}`}>
          <h1>EXPERIÊNCIAS</h1>
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.black} />
      </section>

      <section className={styles.footer}>
        <div className={`${styles.footer__content} ${styles['section-default-config']}`}>
          <h1>FOOTER</h1>
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
      </section>
    </main>
  );
}
