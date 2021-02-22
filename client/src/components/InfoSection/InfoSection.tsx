import React from 'react';
import styles from './InfoSection.module.css';
import cat_img from '../../assets/images/cat.jpg';

const InfoSection = () => {
  return (
    <div className={styles.root}>
      <div>
        <p className={styles.title}>Know your Cat Facts</p>
        <p className={styles.sub_title}>Your one place to get all cat facts</p>
      </div>
      <div className={styles.cat_img_cont}>
        <img className={styles.cat_img} src={cat_img} />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="cat-clip">
              <path className={styles.clip_svg} fill="#0F62FE" d="M44.6,-65.6C55.4,-53.4,60.4,-37.3,63.4,-22C66.4,-6.7,67.5,7.8,66.3,24.6C65.1,41.5,61.6,60.7,50.1,69.6C38.7,78.5,19.3,77.1,2.6,73.6C-14.2,70,-28.3,64.2,-42,56C-55.6,47.8,-68.7,37.2,-75.9,22.8C-83.1,8.4,-84.4,-9.7,-78.8,-25.2C-73.2,-40.7,-60.8,-53.6,-46.5,-64.7C-32.2,-75.8,-16.1,-85,0.4,-85.5C16.8,-86,33.7,-77.8,44.6,-65.6Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default InfoSection
