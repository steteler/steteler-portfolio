import Image from 'next/image';
import Link from 'next/link';
import Title from '@components/Title.jsx';
import styles from '@styles/Section/Project.module.css';
import projectReact from '@public/Project/ProjectReact.png';
import projectJest from '@public/Project/ProjectJest.png';
import projectNode from '@public/Project/ProjectNode.png';

export default function Project() {
  return (
    <section className={styles.project} id="project">
      <Title text="projetos" />
      {/* <details className={styles['project__filter-container']}>
        <summary
          data-close="Mostrar Filtros"
          data-open="Esconder Filtros"
          className={styles.project__btn}
        />
        <div>
          <h4 className={styles['project__filter-title']}>linguagem</h4>
          <div className={styles.project__filter}>
            <button
              aria-label="Filtrar linguagem por Opção de Filtro 1"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 1

            </button>
            <button
              aria-label="Filtrar linguagem por Opção de Filtro 2"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 2

            </button>
            <button
              aria-label="Filtrar linguagem por Opção de Filtro 3"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 3

            </button>
          </div>
        </div>
        <div>
          <h4 className={styles['project__filter-title']}>banco de dados</h4>
          <div className={styles.project__filter}>
            <button
              aria-label="Filtrar banco de dados por Opção de Filtro 1"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 1

            </button>
            <button
              aria-label="Filtrar banco de dados por Opção de Filtro 2"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 2

            </button>
            <button
              aria-label="Filtrar banco de dados por Opção de Filtro 3"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 3

            </button>
          </div>
        </div>
        <div>
          <h4 className={styles['project__filter-title']}>ferramenta</h4>
          <div className={styles.project__filter}>
            <button
              aria-label="Filtrar ferramenta por Opção de Filtro 1"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 1

            </button>
            <button
              aria-label="Filtrar ferramenta por Opção de Filtro 2"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 2

            </button>
            <button
              aria-label="Filtrar ferramenta por Opção de Filtro 3"
              type="button"
              className={styles.project__filter__item}
            >
              Opção de Filtro 3

            </button>
          </div>
        </div>
      </details> */}
      <section className={styles['project-list']}>
        <div className={styles['project-list__item']}>
          <Image
            src={projectNode}
            className={styles['project-list__item__image']}
            alt="Tablerise"
            quality={100}
            draggable={false}
            width={300}
            height={180}
          />
          <Link
            target="_blank"
            href="https://github.com/TableRise"
            className={styles['project-list__item__link']}
          >
            link projeto
          </Link>
        </div>
      </section>
      <section className={styles['project-list']}>
        <div className={styles['project-list__item']}>
          <Image
            src={projectReact}
            className={styles['project-list__item__image']}
            alt="Projeto Recipes App"
            quality={100}
            draggable={false}
            width={300}
            height={180}
          />
          <Link
            target="_blank"
            href="https://github.com/steteler/steteler-recipes-app"
            className={styles['project-list__item__link']}
          >
            link projeto
          </Link>
        </div>
        <div className={styles['project-list__item']}>
          <Image
            src={projectReact}
            className={styles['project-list__item__image']}
            alt="Projeto React Testing Library"
            quality={100}
            draggable={false}
            width={300}
            height={180}
          />
          <Link
            target="_blank"
            href="https://github.com/steteler/steteler-react-testing-library"
            className={styles['project-list__item__link']}
          >
            link projeto
          </Link>
        </div>
        <div className={styles['project-list__item']}>
          <Image
            src={projectJest}
            className={styles['project-list__item__image']}
            alt="Projeto Jest"
            quality={100}
            draggable={false}
            width={300}
            height={180}
          />
          <Link
            target="_blank"
            href="https://github.com/steteler/steteler-project-jest"
            className={styles['project-list__item__link']}
          >
            link projeto
          </Link>
        </div>
      </section>
    </section>
  );
}
