import { useState, useContext, useEffect } from 'react';
import { RequestsContext } from '../../../../context/requests.context';
import { CategoryContext } from '../../../../components/context/category.context';
import { SortContext } from '../sort.context';
import { Suggestion } from '../Suggestion/Suggestion';
import { EmptySuggestion } from '../EmptySuggestion';
import { FeedbackBar } from '../FeedbackBar';
import styles from './_suggestionList.module.scss';

export const SuggestionList = () => {
  const retrievedRequests = useContext(RequestsContext);
  const categoryData = useContext(CategoryContext);
  const sortContext = useContext(SortContext);
  const { category } = categoryData;
  const { sortType } = sortContext;

  const [requestsState, setRequestsState] = useState(
    retrievedRequests.filter((req) => req.status === 'suggestion')
  );

  useEffect(() => {
    if (category === 'all') {
      return setRequestsState(
        retrievedRequests.filter((req) => req.status === 'suggestion')
      );
    }

    setRequestsState(
      retrievedRequests.filter(
        (req) => req.category === category && req.status === 'suggestion'
      )
    );
  }, [category, retrievedRequests]);

  useEffect(() => {
    switch (sortType) {
      case 'most upvotes':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) =>
            a.upvotes === b.upvotes ? 0 : b.upvotes - a.upvotes
          )
        );
        break;

      case 'least upvotes':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) =>
            a.upvotes === b.upvotes ? 0 : a.upvotes - b.upvotes
          )
        );
        break;

      case 'most comments':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) =>
            a.comments.length === b.comments.length
              ? 0
              : b.comments.length - a.comments.length
          )
        );
        break;

      case 'least comments':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) =>
            a.comments.length === b.comments.length
              ? 0
              : a.comments.length - b.comments.length
          )
        );
        break;

      default:
        return setRequestsState((prevState) => prevState);
    }
  }, [sortType]);

  return (
    <>
      <div>
        <FeedbackBar />
        <main className={styles.container}>
          {!requestsState.length && <EmptySuggestion />}
          {requestsState.length > 0 &&
            requestsState.map((request) => (
              <Suggestion
                request={request}
                key={request.title}
                sortType={sortType}
              />
            ))}
        </main>
      </div>
    </>
  );
};
