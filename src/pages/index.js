import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from './HomepageFeatures/Platform-Overview';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className={clsx("container",styles.back)} >
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       {/* <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link> */}
    //     </div>
    //   </div>
    // </header>
    <div 
    style={{ backgroundImage: "url('https://www.geospatialworld.net/wp-content/uploads/2023/07/Remote-Sensing-Analysis-1600x840-1.png')" ,
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'75vh',
    opacity: 0.8}}>
      <header className={clsx( styles.heroBanner)}>
        <div style={{color: 'dark',opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '50vh'}} >
          <Heading as="h1" style={{ fontFamily: 'Arial', fontSize: '5.5vw', color: 'white',opacity: 1 }}>
             {siteConfig.title}
             </Heading>
             <p style={{ fontFamily: 'Arial', fontSize: '3.2vw', color: 'white',opacity: 1}}>{siteConfig.tagline}</p>
        </div>     
      </header>
    </div>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
