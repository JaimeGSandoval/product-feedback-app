import { useParams } from 'react-router-dom';
import { CommentsList } from './components/CommentsList';
import styles from './components/CommentsList/_commentsList.module.scss';

export const FeedbackDetailPage = () => {
  const { requestID } = useParams();

  return (
    <>
      <div className={styles.container}>
        <CommentsList requestID={requestID} />
      </div>
    </>
  );
};
