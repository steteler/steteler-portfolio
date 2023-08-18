import styles from '@styles/Technology/TechnologyContainer.module.css';
import TechnologyItem from './TechnologyItem';

export default function TechnologyContainer({ technologies, title = 'technology title' }) {
  return (
    <section className={styles['technology-container']}>
      <h3 className={styles['technology-container__title']}>{`"${title}"`}</h3>
      <ul className={styles.technology}>
        {
          technologies.map(({ technology, link }) => (
            <TechnologyItem technology={technology} link={link} key={technology} />
          ))
        }
      </ul>
    </section>
  );
}
