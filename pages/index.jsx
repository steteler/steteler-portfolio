import Head from 'next/head';
import Divider from '@components/Divider.jsx';
import About from '@components/Section/About.jsx';
import Project from '@components/Section/Project.jsx';
import Skill from '@components/Section/Skill/Skill.jsx';
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
        <div className="section-container home-section">
          <Home />
          <Divider />
        </div>
        <div className="section-container">
          <About />
          <Divider />
        </div>
        <div className="section-container">
          <Project />
          <Divider />
        </div>
        <div className="section-container">
          <Skill />
          <Divider />
        </div>
        <div className="section-container">
          <Experience />
          <Divider />
        </div>
        <div className="section-container">
          <Footer />
        </div>
      </main>
    </>
  );
}
