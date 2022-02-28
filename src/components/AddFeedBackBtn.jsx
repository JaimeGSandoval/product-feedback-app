import React from 'react';
import { Link } from 'react-router-dom';

export const AddFeedBackBtn = ({ styles }) => {
  return (
    <>
      <Link to="/add-feedback" className={styles.feedBackBtn} tabIndex="0">
        <span className={styles.plusSign}>&#43;</span> add feedback
      </Link>
    </>
  );
};
