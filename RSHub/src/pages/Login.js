import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LoginPage from './LoginPage/LoginPage.js';

import Heading from '@theme/Heading';
import styles from './index.module.css';


export default function Login() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main >
        <LoginPage />
      </main>
    </Layout>
  );
}
