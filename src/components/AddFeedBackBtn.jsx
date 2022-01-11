import React from 'react';
import { Link } from 'react-router-dom';
import { GoBackBtn } from './GoBackBtn';

export const AddFeedBackBtn = ({ styles }) => {
  return (
    <>
      <button className={styles.feedBackBtn} tabIndex="0">
        <Link to="/add-feedback" className={styles.feedBackText}>
          <span className={styles.plusSign}>&#43;</span> add feedback
        </Link>
      </button>
    </>
  );
};
