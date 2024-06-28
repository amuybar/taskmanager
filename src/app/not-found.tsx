
import React from 'react';
import Link from 'next/link';
import styles from './404.module.css';

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className={styles.link}>Go back home
      </Link>
    </div>
  );
};

export default Custom404;
