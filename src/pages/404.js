import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <h1 style={{ fontSize: '5rem', marginLeft: '1rem' }}>Page not found</h1>
      <p style={{ fontSize: '3rem', marginLeft: '1rem' }}>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
