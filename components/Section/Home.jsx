import Link from 'next/link';
import Image from 'next/image';
import ContactContainer from '@components/Contact/ContactContainer.jsx';
import styles from '@styles/Section/Home.module.css';
import homeImage from '@public/Home/homeImage.svg';

export default function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles['home-info']}>
        <div className={styles['home-info__name-role']}>
          <p className={styles['home-info__name']}>
            Olá 👋,
            <br />
            eu sou o João Victor Steteler 🇧🇷
          </p>
          <p className={styles['home-info__role']}>DESENVOLVEDOR FULLSTACK</p>
        </div>
        <div>
          <p className={styles['home-info__summary']}>
            “Minimalista, perfeccionista, organizado,
            regrado e professor nas horas vagas xD.”
          </p>
          <Link href="#about" className={styles['home-info__link']}>
            SAIBA MAIS ➜
          </Link>
        </div>
        <ContactContainer />
      </div>
      <Image
        placeholder="blur"
        blurDataURL={homeImage.src}
        src={homeImage.src}
        width={480}
        height={480}
        className={styles.home__image}
        quality={100}
        draggable={false}
        alt="imagem ilustrativa de um programador no computador"
      />
    </section>
  );
}
