import styles from '@styles/Skill.module.css';

export default function SkillItem({ technology = 'javascript', link = '#' }) {
  return (
    <li className={styles.skill__item}>
      <p className={styles.skill__text}>{technology}</p>
      <div className={styles['skill__progress-bar']}>
        <div className={styles.skill__progress} />
      </div>
      <a href={link} className={styles.skill__link}>ver projeto ➜</a>
    </li>
  );
}
