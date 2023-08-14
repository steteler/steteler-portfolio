import Image from 'next/image';
import Link from 'next/link';

export default function ContactItem({
  link, src, alt, width, height,
}) {
  return (
    <Link href={link}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
}
