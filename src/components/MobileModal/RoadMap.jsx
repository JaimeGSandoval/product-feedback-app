import React from 'react';
import styles from './_mobileModal.module.scss';

const RoadMapData = ({ roadmapData, taskTotal }) => {
  return (
    <div className={styles.roadMapRow}>
      <div className={styles.roadMapStatusBox}>
        <span className={styles.colorCircle}></span>
        <span className={styles.status}>{roadmapData.status}</span>
      </div>
      <span className={styles.taskAmount}>{roadmapData.tasks}</span>
    </div>
  );
};

export default React.memo(RoadMapData);
