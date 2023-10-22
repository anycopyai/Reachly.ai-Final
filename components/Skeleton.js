import React from 'react';
import styles from '../styles/Skeleton.module.css';

function Skeleton({ type }) {
    const classes = {
        avatar: styles.skeletonAvatar,
        title: styles.skeletonTitle,
        text: styles.skeletonText,
        button: styles.skeletonButton
    };

    const skeletonClass = `${styles.skeleton} ${classes[type] || styles.skeletonDefault}`;

    return <div className={skeletonClass}></div>;
}

export default Skeleton;
