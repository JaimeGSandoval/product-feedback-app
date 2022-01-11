import arrowLeft from '../assets/icons/arrow-left.svg';

export const GoBackBtn = ({ styles, goBack }) => {
  return (
    <>
      <button className={styles.goBackBtn} onClick={goBack} tabIndex="0">
        <img className={styles.arrowLeft} src={arrowLeft} alt="back arrow" />
        <span className={styles.goBackText}>go back</span>
      </button>
    </>
  );
};
