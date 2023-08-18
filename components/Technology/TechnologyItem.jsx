import styles from '@styles/Technology/TechnologyItem.module.css';

export default function TechnologyItem({ technology = 'javascript', link = '#' }) {
  return (
    <li className={styles.technology__item}>
      <p className={styles.technology__text}>{technology}</p>
      <div className={styles['technology__progress-bar']}>
        <div className={styles.technology__progress} />
      </div>
      <a href={link} className={styles.technology__link}>ver projeto ➜</a>
    </li>
  );
}
