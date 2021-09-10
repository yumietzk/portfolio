import React from 'react';
import Layout from '../components/layout';
import Home from '../components/sections/home';
import About from '../components/sections/about';
import Project from '../components/sections/project';
import Contact from '../components/sections/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Project />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
