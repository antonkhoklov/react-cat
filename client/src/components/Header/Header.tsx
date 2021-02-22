import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <p className={styles.logo_text}>Cat Facts</p>
        </div>
        <div>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/facts">Facts</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
