import Divider from '@components/Divider.jsx';
import Title from '@components/Title.jsx';
import TechnologyContainer from '@components/Technology/TechnologyContainer.jsx';
import styles from '@styles/Section/Skill.module.css';

export default function Skill() {
  const languages = [
    { technology: 'javascript es6', link: '#' },
    { technology: 'typescript', link: '#' },
    { technology: 'python', link: '#' },
    { technology: 'java', link: '#' },
    { technology: 'c#', link: '#' },
    { technology: 'c++', link: '#' },
  ];

  const databases = [
    { technology: 'sql / nosql', link: '#' },
    { technology: 'mysql', link: '#' },
    { technology: 'mongodb', link: '#' },
  ];

  const frameworks = [
    { technology: 'node.js', link: '#' },
    { technology: 'react.js', link: '#' },
    { technology: 'next.js', link: '#' },
    { technology: 'express', link: '#' },
    { technology: 'apis restful', link: '#' },
    { technology: 'redux', link: '#' },
    { technology: 'jwt', link: '#' },
    { technology: 'jest', link: '#' },
    { technology: 'rtl', link: '#' },
    { technology: 'pytest', link: '#' },
  ];

  const tools = [
    { technology: 'figma', link: '#' },
    { technology: 'trello', link: '#' },
    { technology: 'docker', link: '#' },
    { technology: 'docker compose', link: '#' },
  ];
  return (
    <section className={styles.skill}>
      <div className={styles['section-default-config']}>
        <Title text="habilidades" />
        <TechnologyContainer technologies={languages} title="linguagens" />
        <TechnologyContainer technologies={databases} title="banco de dados" />
        <TechnologyContainer technologies={frameworks} title="frameworks" />
        <TechnologyContainer technologies={tools} title="ferramentas" />
      </div>
      <Divider />
    </section>
  );
}
