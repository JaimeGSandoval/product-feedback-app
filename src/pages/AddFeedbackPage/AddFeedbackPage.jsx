import { useNavigate } from 'react-router-dom';
import { FeedbackForm } from './components/FeedbackForm';
import { GoBackBtn } from '../../components/GoBackBtn';
import styles from './components/FeedbackForm/_feedbackForm.module.scss';

export const AddFeedbackPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className={styles.container}>
        <GoBackBtn styles={styles} goBack={goBack} />
        <FeedbackForm />
      </div>
    </>
  );
};
