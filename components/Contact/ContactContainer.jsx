import styles from '@styles/Contact/ContactContainer.module.css';
import wppIcon from '@public/Contact/icon-wpp.svg';
import emailIcon from '@public/Contact/icon-email.svg';
import linkedinIcon from '@public/Contact/icon-linkedin.svg';
import githubIcon from '@public/Contact/icon-github.svg';
import ContactItem from './ContactItem';

export default function ContactContainer({ align = 'left' }) {
  return (
    <section className={styles['page-contact']} style={{ textAlign: align }}>
      <ContactItem link="#" src={wppIcon.src} alt="Número whatsapp para contato" />
      <ContactItem link="#" src={emailIcon.src} alt="Email para contato" />
      <ContactItem link="#" src={linkedinIcon.src} alt="Linkedin para contato" />
      <ContactItem link="#" src={githubIcon.src} alt="Github para contato" />
    </section>
  );
}
