import styles from '@styles/Section/Skill/Technology/TechnologyContainer.module.css';
import TechnologyItem from './TechnologyItem';

export default function TechnologyContainer({ technologies, title = 'technology title' }) {
  return (
    <div className={styles['technology-container']}>
      <h3 className={styles['technology-container__title']}>{title}</h3>
      <ul className={styles['technology-container__ul']}>
        {
          technologies.map(({ technology, link, percentage }) => (
            <TechnologyItem
              technology={technology}
              link={link}
              percentage={percentage}
              key={technology}
            />
          ))
        }
      </ul>
    </div>
  );
}
