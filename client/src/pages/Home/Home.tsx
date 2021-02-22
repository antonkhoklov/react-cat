import React from 'react';
import styles from "./Home.module.css";
import StepsSection from '../../components/StepsSection/StepsSection';
import InfoSection from '../../components/InfoSection/InfoSection';

const Home = () => {
  return (
    <div className={styles.root}>
      <InfoSection />
      <StepsSection />
    </div>
  )
}

export default Home
