import { useCallback, useState } from 'react';
import wppIcon from '@public/Contact/icon-wpp.svg';
import emailIcon from '@public/Contact/icon-email.svg';
import linkedinIcon from '@public/Contact/icon-linkedin.svg';
import githubIcon from '@public/Contact/icon-github.svg';
import styles from '@styles/Contact/ContactContainer.module.css';
import ContactItem from './ContactItem';

export default function ContactContainer({ align = 'left' }) {
  const [contactId, setContactId] = useState(null);

  const toggleOpen = useCallback((id) => {
    setContactId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <section className={styles.contact} style={{ textAlign: align }}>
      <ContactItem
        text="+55 17 991661057"
        src={wppIcon.src}
        alt="Email para contato"
        callBack={() => toggleOpen(1)}
        isOpen={contactId === 1}
      />
      <ContactItem
        text="joaovictorkikuti@gmail.com"
        src={emailIcon.src}
        alt="Email para contato"
        callBack={() => toggleOpen(2)}
        isOpen={contactId === 2}
      />
      <ContactItem
        link="https://www.linkedin.com/in/steteler/"
        text="linkedin.com/steteler"
        src={linkedinIcon.src}
        alt="Linkedin para contato"
        callBack={() => toggleOpen(3)}
        isOpen={contactId === 3}
      />
      <ContactItem
        link="https://github.com/steteler"
        text="github.com/steteler"
        src={githubIcon.src}
        alt="Github para contato"
        callBack={() => toggleOpen(4)}
        isOpen={contactId === 4}
      />
    </section>
  );
}
