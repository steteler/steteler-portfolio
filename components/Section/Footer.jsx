import ContactContainer from '@components/Contact/ContactContainer.jsx';
import styles from '@styles/Section/Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles['section-default-config']}>
        <p className={styles.footer__text}>
          Feito com muito ☕
          <br />
          por João Victor Steteler
        </p>
        <p className={styles['footer__text-warn']}>código, design, referências e documentação do site no meu github oficial</p>
        <ContactContainer />
      </div>
    </section>
  );
}
