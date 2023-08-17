import Divider from '@components/Divider.jsx';
import Title from '@components/Title.jsx';
import styles from '@styles/Section/Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles['section-default-config']}>
        <Title text="experiências" />
        <h3>⚠️ Em desenvolvimento ⚠️</h3>
      </div>
      <Divider />
    </section>
  );
}
