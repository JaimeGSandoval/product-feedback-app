import React from 'react';

export const AddFeedBackBtn = ({ styles }) => {
  return (
    <>
      <button className={styles.feedBackBtn}>
        <span className={styles.plusSign}>&#43;</span> add feedback
      </button>
    </>
  );
};
