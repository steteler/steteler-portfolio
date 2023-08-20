import Image from 'next/image';
import Link from 'next/link';
import Title from '@components/Title.jsx';
import styles from '@styles/Section/Project.module.css';
import projectTemplate from '@public/project-template.png';

export default function Project() {
  return (
    <section id="project">
      <Title text="projetos" />
      <details className={styles['project__filter-container']}>
        <summary
          data-close="Mostrar Filtros"
          data-open="Esconder Filtros"
          className={styles.project__btn}
        />
        <div>
          <h4 className={styles['project__filter-title']}>linguagem</h4>
          <div className={styles.project__filter}>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 1</button>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 2</button>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 3</button>
          </div>
        </div>
        <div>
          <h4 className={styles['project__filter-title']}>banco de dados</h4>
          <div className={styles.project__filter}>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 1</button>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 2</button>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 3</button>
          </div>
        </div>
        <div>
          <h4 className={styles['project__filter-title']}>ferramenta</h4>
          <div className={styles.project__filter}>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 1</button>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 2</button>
            <button type="button" className={styles.project__filter__item}>Opção de Filtro 3</button>
          </div>
        </div>
      </details>
      <section className={styles['project-list']}>
        <div className={styles['project-list__item']}>
          <Image
            src={projectTemplate}
            className={styles['project-list__item__image']}
            alt="Project1"
            quality={100}
          />
          <Link href="#project" className={styles['project-list__item__link']}>link projeto</Link>
        </div>
        <div className={styles['project-list__item']}>
          <Image
            src={projectTemplate}
            className={styles['project-list__item__image']}
            alt="Project1"
            priority="false"
            quality={100}
          />
          <Link href="#project" className={styles['project-list__item__link']}>link projeto</Link>
        </div>
        <div className={styles['project-list__item']}>
          <Image
            src={projectTemplate}
            className={styles['project-list__item__image']}
            alt="Project1"
            priority="false"
            quality={100}
          />
          <Link href="#project" className={styles['project-list__item__link']}>link projeto</Link>
        </div>
        <div className={styles['project-list__item']}>
          <Image
            src={projectTemplate}
            className={styles['project-list__item__image']}
            alt="Project1"
            priority="false"
            quality={100}
          />
          <Link href="#project" className={styles['project-list__item__link']}>link projeto</Link>
        </div>
        <div className={styles['project-list__item']}>
          <Image
            src={projectTemplate}
            className={styles['project-list__item__image']}
            alt="Project1"
            priority="false"
            quality={100}
          />
          <Link href="#project" className={styles['project-list__item__link']}>link projeto</Link>
        </div>
      </section>
    </section>
  );
}
