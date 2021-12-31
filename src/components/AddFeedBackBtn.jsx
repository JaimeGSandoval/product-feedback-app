import React from 'react';
import { Link } from 'react-router-dom';

export const AddFeedBackBtn = ({ styles }) => {
  return (
    <>
      <button className={styles.feedBackBtn}>
        <Link to="/add-feedback" className={styles.feedBackText}>
          <span className={styles.plusSign}>&#43;</span> add feedback
        </Link>
      </button>
    </>
  );
};
