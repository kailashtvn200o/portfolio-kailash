import React from 'react';
import styles from '../../styles/Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerContainer}>
        <img src="/banner.png" alt="Profile" className={styles.bannerImage} />
      </div>
    </div>
  );
}
