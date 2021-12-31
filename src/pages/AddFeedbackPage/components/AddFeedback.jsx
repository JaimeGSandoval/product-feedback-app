import { useNavigate } from 'react-router-dom';
import styles from './_addFeedback.module.scss';
import arrowLeft from '../../../assets/icons/arrow-left.svg';

export const AddFeedback = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className={styles.container}>
      <div className={styles.goBackBtnBox} onClick={goBack}>
        <img className={styles.arrowLeft} src={arrowLeft} alt="back arrow" />
        <span className={styles.goBackText}>go back</span>
      </div>
    </div>
  );
};
