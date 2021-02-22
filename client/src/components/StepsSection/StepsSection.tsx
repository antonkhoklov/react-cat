import React from 'react';
import styles from './StepsSection.module.css';
import peeking_cat_img from '../../assets/images/peeking_cat.svg';
import {MdWeb} from 'react-icons/md';
import {FaSearch, FaPaw} from 'react-icons/fa';
import {BsChevronDoubleRight} from 'react-icons/bs';

const StepsSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.steps_title}>How it works</p>
        <div className={styles.steps}>
          <div className={styles.step_cont}>
            <MdWeb className={styles.icon} />
            <p className={styles.step_text}>Open the Facts page</p>
          </div>
          <BsChevronDoubleRight className={styles.arrow_icon} />
          <div className={styles.step_cont}>
            <FaPaw className={styles.icon} />
            <p className={styles.step_text}>Choose the number of facts to display</p>
          </div>
          <BsChevronDoubleRight className={styles.arrow_icon} />
          <div className={styles.step_cont}>
            <FaSearch className={styles.icon} />
            <p className={styles.step_text}>Click "Update"</p>
          </div>
        </div>
      </div>
      <div className={styles.peeking_cat_cont}>
        <img className={styles.peeking_cat_img} src={peeking_cat_img} />
      </div>
    </div>
  )
}

export default StepsSection
