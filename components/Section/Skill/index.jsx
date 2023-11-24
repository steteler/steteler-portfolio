import Title from "@components/Title.jsx";
import TechnologyContainer from "@components/Section/Skill/Technology/TechnologyContainer.jsx";
import styles from "@styles/Section/Skill/Skill.module.css";

export default function Skill() {
  const languages = [
    {
      technology: "java",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "javascript es6",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "typescript",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "python",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "80%",
    },
    {
      technology: "node.js",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
  ];

  const databases = [
    {
      technology: "sql / nosql",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "mysql",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "mongodb",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "firebase",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
  ];

  const frameworks = [
    {
      technology: "spring boot",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "react.js",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "next.js",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "tailwind css",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "bootstrap",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "material ui",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "sass / scss",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "express",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "apis restful",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "redux",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "jwt",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "80%",
    },
    {
      technology: "jest",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "cypress",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "rtl",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "pytest",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
  ];

  const tools = [
    {
      technology: "linux / ubuntu",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "ci / cd",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "figma",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "trello",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "docker",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
    {
      technology: "docker compose",
      link: "https://github.com/steteler?tab=repositories",
      percentage: "100%",
    },
  ];
  return (
    <section className={styles.skill} id="skill">
      <Title text="habilidades" />
      <TechnologyContainer technologies={languages} title="linguagens" />
      <hr style={{ width: "80%" }} />
      <TechnologyContainer technologies={databases} title="banco de dados" />
      <hr style={{ width: "80%" }} />
      <TechnologyContainer technologies={frameworks} title="frameworks" />
      <hr style={{ width: "80%" }} />
      <TechnologyContainer technologies={tools} title="ferramentas & devops" />
    </section>
  );
}
