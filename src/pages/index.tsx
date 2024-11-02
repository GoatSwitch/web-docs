import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {useHistory} from 'react-router-dom';

import styles from './index.module.css';
import { useEffect } from 'react';

export default function Home(): JSX.Element {
  const history = useHistory();
  useEffect (() => {
    history.push('/intro');
  }, [history]);
  return null;

  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
