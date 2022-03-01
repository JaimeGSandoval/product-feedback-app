import { useParams } from 'react-router-dom';
import { IDContextProvider } from './context/ID.context';
import { CommentsList } from './components/CommentsList';

export const FeedbackDetailPage = () => {
  window.scrollTo(0, 0);
  const { requestID } = useParams();
  const request = JSON.parse(localStorage.getItem('requests')).find(
    (request) => request.requestID === requestID
  );

  return (
    <>
      <IDContextProvider>
        <CommentsList requestID={requestID} request={request} />
      </IDContextProvider>
    </>
  );
};
