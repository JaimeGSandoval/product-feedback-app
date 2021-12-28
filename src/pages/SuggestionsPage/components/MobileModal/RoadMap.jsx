import React from 'react';
import styles from './_mobileModal.module.scss';

const RoadMapData = ({ data }) => {
  return (
    <div className={styles.roadMapRow}>
      <div className={styles.roadMapCategoryBox}>
        <span className={styles.colorCircle}></span>
        <span className={styles.category}>{data.category}</span>
      </div>
      <span className={styles.taskAmount}>{data.tasks}</span>
    </div>
  );
};

export default React.memo(RoadMapData);
