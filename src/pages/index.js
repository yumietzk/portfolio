import React from 'react';
import Layout from '../components/layout';
import Home from '../components/sections/home';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
