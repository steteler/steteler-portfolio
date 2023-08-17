import Head from 'next/head';
import About from '@components/Section/About.jsx';
import Project from '@components/Section/Project.jsx';
import Skill from '@components/Section/Skill.jsx';
import Experience from '@components/Section/Experience.jsx';
import Footer from '@components/Section/Footer.jsx';
import Home from '@components/Section/Home.jsx';

export default function Index() {
  return (
    <>
      <Head>
        <title>Steteler Portfolio</title>
      </Head>
      <main>
        <Home />
        <About />
        <Project />
        <Skill />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
