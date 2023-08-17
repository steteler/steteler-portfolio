import styles from '@styles/Skill/SkillContainer.module.css';
import SkillItem from './SkillItem';

export default function SkillContainer({ technologies, title = 'technology title' }) {
  return (
    <section className={styles['skill-container']}>
      <h3 className={styles['skill-container__title']}>{`"${title}"`}</h3>
      <ul className={styles.skill}>
        {
          technologies.map(({ technology, link }) => (
            <SkillItem technology={technology} link={link} key={technology} />
          ))
        }
      </ul>
    </section>
  );
}
