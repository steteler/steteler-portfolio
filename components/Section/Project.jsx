import Divider from '@components/Divider.jsx';
import Title from '@components/Title.jsx';
import styles from '@styles/Section/Project.module.css';

export default function Project() {
  return (
    <section className={styles.project}>
      <div className={styles['section-default-config']}>
        <Title text="projetos" />
        <h3>⚠️ Em desenvolvimento ⚠️</h3>
      </div>
      <Divider />
    </section>
  );
}
