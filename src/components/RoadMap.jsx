import React from 'react';

const RoadMapData = ({ roadmapData, taskTotal, styles }) => {
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
