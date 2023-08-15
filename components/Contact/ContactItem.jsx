import Image from 'next/image';
import Link from 'next/link';

export default function ContactItem({
  link, src, alt,
}) {
  return (
    <Link href={link}>
      <Image
        src={src}
        alt={alt}
        width="36"
        height="36"
      />
    </Link>
  );
}
