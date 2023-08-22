import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Contact/ContactItem.module.css';

export default function ContactItem({
  link = '',
  src,
  alt,
  text,
  callBack,
  isOpen,
}) {
  return (
    <button type="button" className={`${styles.contact__container} ${isOpen && styles.open}`}>
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
      <Link
        href={link}
        target={link ? '_blank' : null}
        className={styles.contact__link}
      >
        {text}
      </Link>
    </button>
  );
}
