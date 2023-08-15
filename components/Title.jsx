import styles from '@styles/Title.module.css';

export default function Title({ text }) {
  return (
    <h1 className={styles.component__title}>{text}</h1>
  );
}
