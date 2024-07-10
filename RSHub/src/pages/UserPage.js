import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UserPage1 from './UserPage1/UserPage1.js';

import Heading from '@theme/Heading';
import styles from './index.module.css';


export default function UserPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main >
        <UserPage1 />
      </main>
    </Layout>
  );
}
