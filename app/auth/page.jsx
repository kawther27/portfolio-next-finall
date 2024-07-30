import React from 'react';
import AuthPageClient from './AuthPageClient';
import Layout from '../components/Layout';

const AuthPageServer = () => {
  return (
    <Layout>
      <section id="auth">
        <AuthPageClient />
      </section>
    </Layout>
  );
};

export default AuthPageServer;
