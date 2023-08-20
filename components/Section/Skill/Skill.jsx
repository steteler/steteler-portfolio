import Title from '@components/Title.jsx';
import TechnologyContainer from '@components/Section/Skill/Technology/TechnologyContainer.jsx';
import styles from '@styles/Section/Skill/Skill.module.css';

export default function Skill() {
  const languages = [
    { technology: 'javascript es6', link: '#', percentage: '80%' },
    { technology: 'typescript', link: '#', percentage: '80%' },
    { technology: 'python', link: '#', percentage: '80%' },
    { technology: 'java', link: '#', percentage: '80%' },
    { technology: 'c#', link: '#', percentage: '80%' },
    { technology: 'c++', link: '#', percentage: '80%' },
  ];

  const databases = [
    { technology: 'sql / nosql', link: '#', percentage: '80%' },
    { technology: 'mysql', link: '#', percentage: '80%' },
    { technology: 'mongodb', link: '#', percentage: '80%' },
  ];

  const frameworks = [
    { technology: 'node.js', link: '#', percentage: '80%' },
    { technology: 'react.js', link: '#', percentage: '80%' },
    { technology: 'next.js', link: '#', percentage: '80%' },
    { technology: 'express', link: '#', percentage: '80%' },
    { technology: 'apis restful', link: '#', percentage: '80%' },
    { technology: 'redux', link: '#', percentage: '80%' },
    { technology: 'jwt', link: '#', percentage: '80%' },
    { technology: 'jest', link: '#', percentage: '80%' },
    { technology: 'rtl', link: '#', percentage: '80%' },
    { technology: 'pytest', link: '#', percentage: '80%' },
  ];

  const tools = [
    { technology: 'figma', link: '#', percentage: '80%' },
    { technology: 'trello', link: '#', percentage: '80%' },
    { technology: 'docker', link: '#', percentage: '80%' },
    { technology: 'docker compose', link: '#', percentage: '80%' },
  ];
  return (
    <section id={styles.skill}>
      <Title text="habilidades" />
      <TechnologyContainer
        technologies={languages}
        title="linguagens"
      />
      <hr style={{ width: '80%' }} />
      <TechnologyContainer
        technologies={databases}
        title="banco de dados"
      />
      <hr style={{ width: '80%' }} />
      <TechnologyContainer
        technologies={frameworks}
        title="frameworks"
      />
      <hr style={{ width: '80%' }} />
      <TechnologyContainer
        technologies={tools}
        title="ferramentas"
      />
    </section>
  );
}
