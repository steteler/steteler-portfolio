import Title from '@components/Title.jsx';
import TechnologyContainer from '@components/Section/Skill/Technology/TechnologyContainer.jsx';
import styles from '@styles/Section/Skill/Skill.module.css';

export default function Skill() {
  const languages = [
    { technology: 'javascript es6', link: '#project', percentage: '100%' },
    { technology: 'typescript', link: '#project', percentage: '100%' },
    { technology: 'python', link: '#project', percentage: '80%' },
    { technology: 'java', link: '#project', percentage: '80%' },
    { technology: 'c#', link: '#project', percentage: '80%' },
    { technology: 'c++', link: '#project', percentage: '80%' },
  ];

  const databases = [
    { technology: 'sql / nosql', link: '#project', percentage: '100%' },
    { technology: 'mysql', link: '#project', percentage: '100%' },
    { technology: 'mongodb', link: '#project', percentage: '100%' },
  ];

  const frameworks = [
    { technology: 'node.js', link: '#project', percentage: '100%' },
    { technology: 'react.js', link: '#project', percentage: '100%' },
    { technology: 'next.js', link: '#project', percentage: '100%' },
    { technology: 'express', link: '#project', percentage: '100%' },
    { technology: 'apis restful', link: '#project', percentage: '100%' },
    { technology: 'redux', link: '#project', percentage: '100%' },
    { technology: 'jwt', link: '#project', percentage: '80%' },
    { technology: 'jest', link: '#project', percentage: '100%' },
    { technology: 'rtl', link: '#project', percentage: '100%' },
    { technology: 'pytest', link: '#project', percentage: '100%' },
  ];

  const tools = [
    { technology: 'figma', link: '#project', percentage: '100%' },
    { technology: 'trello', link: '#project', percentage: '100%' },
    { technology: 'docker', link: '#project', percentage: '100%' },
    { technology: 'docker compose', link: '#project', percentage: '100%' },
  ];
  return (
    <section className={styles.skill} id="skill">
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
