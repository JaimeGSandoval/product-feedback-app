import { useParams } from 'react-router-dom';
import { IDContextProvider } from './context/ID.context';
import { CommentsList } from './components/CommentsList';

export const FeedbackDetailPage = () => {
  const { requestID } = useParams();
  window.scrollTo(0, 0);

  return (
    <>
      <IDContextProvider>
        <CommentsList requestID={requestID} />
      </IDContextProvider>
    </>
  );
};
