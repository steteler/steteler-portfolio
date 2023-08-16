import styles from '@styles/Title.module.css';

export default function Title({ text = 'title' }) {
  return (
    <h1 className={styles.component__title}>{text}</h1>
  );
}
