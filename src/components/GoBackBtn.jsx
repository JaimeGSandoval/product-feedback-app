import arrowLeft from '../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export const GoBackBtn = ({ styles }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <>
      <button className={styles.goBackBtn} onClick={goBack} tabIndex="0">
        <img className={styles.arrowLeft} src={arrowLeft} alt="back arrow" />
        <span className={styles.goBackText}>go back</span>
      </button>
    </>
  );
};
