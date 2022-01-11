import { CommentsList } from './components/CommentsList';
import styles from './components/CommentsList/_commentsList.module.scss';

export const FeedbackDetailPage = () => {
  return (
    <>
      <div className={styles.container}>
        <CommentsList />
      </div>
    </>
  );
};
