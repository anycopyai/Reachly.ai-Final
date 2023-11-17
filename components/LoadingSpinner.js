import React from 'react';
import styles from './LoadingSpinner.module.css'; // Assume you have a CSS module for styling

const LoadingSpinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;
