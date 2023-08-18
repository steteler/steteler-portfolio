import Image from 'next/image';
import Link from 'next/link';
import Divider from '@components/Divider.jsx';
import Title from '@components/Title.jsx';
import styles from '@styles/Section/Project.module.css';
import projectTemplate from '@public/project-template.png';

export default function Project() {
  return (
    <section className={styles.project} id="project">
      <div className={styles['section-default-config']}>
        <Title text="projetos" />
        <details className={styles['project-container']}>
          <summary data-close="Mostrar Filtros" data-open="Esconder Filtros" className={styles['project__filter-btn']} />
          <div>
            <h4>linguagem</h4>
            <div className={styles['project__filter-container']}>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 1</button>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 2</button>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 3</button>
            </div>
          </div>
          <div>
            <h4>banco de dados</h4>
            <div className={styles['project__filter-container']}>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 1</button>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 2</button>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 3</button>
            </div>
          </div>
          <div>
            <h4>ferramenta</h4>
            <div className={styles['project__filter-container']}>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 1</button>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 2</button>
              <button type="button" className={styles['project__filter-item']}>Opção de Filtro 3</button>
            </div>
          </div>
        </details>

        <section className={styles['project-list']}>
          <div className={styles['project-item']}>
            <Image
              src={projectTemplate}
              className={styles['project-item__image']}
              alt="Project1"
              priority="false"
              quality={100}
            />
            <Link href="#project" className={styles['project-item__link']}>link projeto</Link>
          </div>
          <div className={styles['project-item']}>
            <Image
              src={projectTemplate}
              className={styles['project-item__image']}
              alt="Project1"
              priority="false"
              quality={100}
            />
            <Link href="#project" className={styles['project-item__link']}>link projeto</Link>
          </div>
          <div className={styles['project-item']}>
            <Image
              src={projectTemplate}
              className={styles['project-item__image']}
              alt="Project1"
              priority="false"
              quality={100}
            />
            <Link href="#project" className={styles['project-item__link']}>link projeto</Link>
          </div>
          <div className={styles['project-item']}>
            <Image
              src={projectTemplate}
              className={styles['project-item__image']}
              alt="Project1"
              priority="false"
              quality={100}
            />
            <Link href="#project" className={styles['project-item__link']}>link projeto</Link>
          </div>
          <div className={styles['project-item']}>
            <Image
              src={projectTemplate}
              className={styles['project-item__image']}
              alt="Project1"
              priority="false"
              quality={100}
            />
            <Link href="#project" className={styles['project-item__link']}>link projeto</Link>
          </div>
        </section>
      </div>
      <Divider />
    </section>
  );
}
