import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Contact/ContactItem.module.css';

export default function ContactItem({
  link, src, alt,
}) {
  return (
    <Link href={link}>
      <Image
        className={styles.contact__image}
        src={src}
        alt={alt}
        quality={100}
        width={36}
        height={36}
        priority
      />
    </Link>
  );
}
