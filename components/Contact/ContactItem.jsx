import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@styles/Contact/ContactItem.module.css';

export default function ContactItem({
  link = '',
  src,
  alt,
  text,
  callBack,
  isOpen,
}) {
  const [wasCopied, setCopied] = useState(false);

  function copyText(selectedText) {
    navigator.clipboard.writeText(selectedText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <button
      aria-label="Abrir contato"
      type="button"
      className={`${styles.contact__container} ${isOpen && styles.open}`}
    >
      <Image
        className={styles.contact__image}
        src={src}
        alt={alt}
        quality={100}
        width={36}
        height={36}
        draggable={false}
        onClick={callBack}
      />
      <div className={styles['contact__link-copied']}>
        <Link
          scroll={false}
          href={link}
          target={link ? '_blank' : null}
          className={styles.contact__link}
          onClick={() => copyText(text)}
        >
          {text}
          <br />
          <span className={styles.contact__text}>clique para copiar</span>
        </Link>
        <span className={`${styles.contact__copied} ${wasCopied && styles.show}`}>
          Copiado ;)
        </span>
      </div>

    </button>
  );
}
