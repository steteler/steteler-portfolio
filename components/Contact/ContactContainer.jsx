import styles from '@styles/Contact.module.css';
import wppIcon from '@public/home-wpp.svg';
import emailIcon from '@public/home-email.svg';
import linkedinIcon from '@public/home-linkedin.svg';
import githubIcon from '@public/home-github.svg';
import ContactItem from './ContactItem';

export default function ContactContainer() {
  return (
    <section className={styles.component__contact}>
      <ContactItem link="#" src={wppIcon.src} alt="Número whatsapp para contato" width="36" height="36" />
      <ContactItem link="#" src={emailIcon.src} alt="Email para contato" width="36" height="36" />
      <ContactItem link="#" src={linkedinIcon.src} alt="Linkedin para contato" width="36" height="36" />
      <ContactItem link="#" src={githubIcon.src} alt="Github para contato" width="36" height="36" />
    </section>
  );
}