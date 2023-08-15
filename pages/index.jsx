import Link from 'next/link';
import ContactContainer from '@components/Contact/ContactContainer.jsx';
import Title from '@components/Title.jsx';
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
          <Title text="sobre" />
          <p>
            Eu sou o João Victor Steteler, nasci em uma cidade pequena
            mas sempre tive um grande sonho de me destacar na área da tecnologia.
            Desde pequeno eu gostava de programação, comecei aprendendo java quando
            criança para desenvolver modificações para um jogo chamado minecraft,
            quando cresci eu fui para outras linguagens como C, C++, C# até chegar
            na linguagem javascript que é a linguagem que mais gostei, com ela
            desenvolvi vários projetos tanto da unifeb (faculdade) quanto da
            trybe (curso de tecnologia). Inspirado por figuras cientificas como
            Alberto Santos Dumont, Nikola Tesla e outros eu decidi aprofundar meus
            conhecimentos em mais tecnologias e outras habilidades como design, soft skills
            em geral por não estar satisfeito somente em aprender hardskills. Nas horas vagas
            eu estudo, dou aulas de programação e por ser fullstack sou conhecido
            também como o “faz tudo” haha 😁.
          </p>
        </div>
        <Divider color={colors.white} />
      </section>

      <section className={styles.project}>
        <div className={`${styles.project__content} ${styles['section-default-config']}`}>
          <Title text="projetos" />
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.black} />
      </section>

      <section className={styles.skill}>
        <div className={`${styles.skill__content} ${styles['section-default-config']}`}>
          <Title text="habilidades" />
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.white} />
      </section>

      <section className={styles.experience}>
        <div className={`${styles.experience__content} ${styles['section-default-config']}`}>
          <Title text="experiências" />
          <h3>⚠️ Em desenvolvimento ⚠️</h3>
        </div>
        <Divider color={colors.black} />
      </section>

      <section className={styles.footer}>
        <div className={`${styles.footer__content} ${styles['section-default-config']}`}>
          <p className={styles.footer__text}>Feito com muito ☕ por João Victor Steteler</p>
          <p className={styles['footer__text-warn']}>código, design, referências e documentação do site no meu github oficial</p>
          <ContactContainer />
        </div>
      </section>
    </main>
  );
}
