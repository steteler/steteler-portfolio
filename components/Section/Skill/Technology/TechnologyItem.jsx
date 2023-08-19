import Link from 'next/link';
import styles from '@styles/Technology/TechnologyItem.module.css';

export default function TechnologyItem({ technology = 'javascript', link = '#', percentage = '80%' }) {
  return (
    <li className={styles['technology-container__item']}>
      <p className={styles['technology-container__text']}>{technology}</p>
      <div className={styles['technology-container__progress-bar']}>
        <div
          className={styles['technology-container__progress']}
          style={{ width: percentage }}
        />
      </div>
      <Link href={link} className={styles['technology-container__link']}>ver projeto ➜</Link>
    </li>
  );
}
