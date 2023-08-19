import ContactContainer from '@components/Contact/ContactContainer.jsx';
import styles from '@styles/Section/Footer.module.css';

export default function Footer() {
  return (
    <section id={styles.footer}>
      <p className={styles.footer__text}>
        Feito com muito ☕
        <br />
        por João Victor Steteler
      </p>
      <p className={styles['footer__text-warn']}>código, design, referências e documentação do site no meu github oficial</p>
      <ContactContainer align="center" />
    </section>
  );
}
