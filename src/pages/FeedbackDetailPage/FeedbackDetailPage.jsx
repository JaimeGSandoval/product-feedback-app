import { useParams } from 'react-router-dom';
import { IDContextProvider } from './context/ID.context';
import { CommentsList } from './components/CommentsList';
import styles from './components/CommentsList/_commentsList.module.scss';

export const FeedbackDetailPage = () => {
  const { requestID } = useParams();

  return (
    <>
      <div className={styles.container}>
        <IDContextProvider>
          <CommentsList requestID={requestID} />
        </IDContextProvider>
      </div>
    </>
  );
};
