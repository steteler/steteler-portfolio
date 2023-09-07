import Link from 'next/link';
import Title from '@components/Title.jsx';
import styles from '@styles/Section/Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles['experience-content']}>
        <Title text="experiência" />
        <div className={styles['experience-content__container']}>
          <h3>
            Estágio ~ Alberto Tech
            <br />
            (Fev 2020 Dez 2021)
          </h3>
          <p>
            Alberto Tech é uma pequena empresa de tecnologia de projetos
            freelance localizada na minha cidade
          </p>
          <ul className={styles['experience-content__list']}>
            <li>
              Desenvolvi sites utilizando Next.js, Material UI e outras
              tecnologias modernas de front-end.
            </li>
            <li>
              Programei back-ends para sites em Node.js com Express, implementando
              funcionalidades de servidor como rotas, APIs e integrações com bancos de dados.
            </li>
            <li>
              Trabalhei em equipe pequena e colaborativa, o que me permitiu aprender
              boas práticas de desenvolvimento ágil e me comunicar de forma clara
              com colegas e gestores.
            </li>
            <li>
              Participei ativamente do levantamento de requisitos com os clientes, o que
              aprimorou minha capacidade de entender necessidades de negócio e transformá-las
              em soluções técnicas.
            </li>
            <li>
              Absorvi conhecimentos valiosos em tecnologias web modernas e metodologias ágeis,
              aumentando minhas habilidades técnicas e interpessoais
            </li>
          </ul>
        </div>
        <div className={styles['experience-content__container']}>
          <h3>
            Autônomo
            <br />
            (Dez 2021 Atualmente)
          </h3>
          <p>
            Durante a minha carreira, tive a oportunidade de me
            envolver em vários projetos como autônomo, trabalhando
            por períodos que variaram de 2 a 3 anos. Esses projetos
            incluíram tanto iniciativas empresariais quanto
            iniciativas da comunidade. Trabalhei em diversos projetos
            legais com a galera da Trybe, e todos os projetos
            públicos estão disponíveis no meu GitHub.

            Normalmente, quando eu faço projetos para empresas, elas
            não deixam eu mostrar o código por causa das regras internas.
            Além disso, como autônomo, não sou realmente parte da
            empresa, só entrego os projetos que eles propõem e cumpro
            os prazos direitinho, mas não sou associado da empresa.
          </p>
          <Link href="#project" className={styles['experience-content__link']}>projetos públicos ➜</Link>
        </div>
      </div>
      <div className={styles['experience-content']}>
        <Title text="educação" />
        <div className={styles['experience-content__container']}>
          <h3 className={styles['experience-content__title']}>
            Trybe
            <br />
            (Mai, 2022 ~ Mai, 2023)
          </h3>
          <p>
            A Trybe é uma escola de tecnologia que oferece cursos práticos
            de Desenvolvimento Web Fullstack. Seu foco é capacitar alunos
            tanto em habilidades técnicas como socioemocionais, preparando-os
            para atuar como profissionais completos na área de tecnologia. Os
            temas abordados incluem:
          </p>
          <ul className={styles['experience-content__list']}>
            <li>Introdução ao desenvolvimento de software</li>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Ciência da computação</li>
            <li>Engenharia de software</li>
            <li>Metodologias ágeis</li>
            <li>Habilidades comportamentais</li>
          </ul>

          <ul className={styles['experience-content__list-link']}>
            <li>
              <Link target="_blank" href="https://www.credential.net/c09f631b-82a0-4938-96ba-4f933e4a1fbd#gs.3zn2sa">FULLSTACK CERTIFICADO ➜</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.credential.net/e1174635-fb2d-40e5-8c1c-9f623828aae4">COMPUTER SCIENCE CERTIFICADO ➜</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.credential.net/482ee7ac-02e5-445d-9d0c-b4f2e0a61bab">BACK END CERTIFICADO ➜</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.credential.net/95489ef1-c827-44d0-9999-b66b5702f1c9">FRONT END CERTIFICADO ➜</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.credential.net/21ac9616-0edd-4956-b269-ecdb710f781f">FUNDAMENTOS CERTIFICADO ➜</Link>
            </li>
          </ul>
        </div>
        <div className={styles['experience-content__container']}>
          <h3 className={styles['experience-content__title']}>
            Unifeb
            <br />
            (Jan, 2019 ~ Jan, 2022)
          </h3>
          <p>
            Concluí até o terceiro ano da graduação em Sistemas de
            Informação na UNIFEB. Porem decidi fazer uma pausa na
            faculdade durante a pandemia pois percebi que o curso
            não estava trazendo o melhor proveito para o meu aprendizado.
            Durante esse período, foquei meus esforços nos estudos para
            conquistar uma vaga na Trybe, onde pude me dedicar a áreas de meu
            interesse com mais dinamismo. Pretendo retomar a faculdade em
            2024, com uma visão renovada e a experiência adquirida na Trybe
            enriquecendo ainda mais minha formação acadêmica.

            O curso de Sistemas de Informação da UNIFEB de Barretos tem
            como foco capacitar os alunos na área de tecnologia da informação,
            abordando temas como:
          </p>
          <ul className={styles['experience-content__list']}>
            <li>Programação</li>
            <li>Redes de computadores</li>
            <li>Desenvolvimento de software</li>
            <li>Arquitetura de Computadores</li>
            <li>Banco de dados</li>
            <li>Análise de sistemas</li>
            <li>Segurança da informação</li>
            <li>Gestão de projetos de TI</li>
            <li>Internet das Coisas (IoT)</li>
            <li>Desenvolvimento web e mobile</li>
            <li>Engenharia de software</li>
            <li>Sistemas operacionais</li>
            <li>Empreendedorismo e inovação em TI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
