import { useState, useContext, useEffect } from 'react';
import { RequestsContext } from '../../../../context/requests.context';
import { CategoryContext } from '../../../../components/MobileModal/category.context';
import { SortContext } from '../sort.context';
import { Suggestion } from '../Suggestion/Suggestion';
import { EmptySuggestion } from '../EmptySuggestion';
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
          [...prevState].sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1))
        );
        break;

      case 'least upvotes':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) => (a.upvotes > b.upvotes ? 1 : -1))
        );
        break;

      case 'most comments':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) =>
            a.comments.length > b.comments.length ? -1 : 1
          )
        );
        break;

      case 'least comments':
        setRequestsState((prevState) =>
          [...prevState].sort((a, b) =>
            a.comments.length > b.comments.length ? 1 : -1
          )
        );
        break;

      default:
        return setRequestsState((prevState) => prevState);
    }
  }, [sortType]);

  return (
    <main className={styles.container}>
      {!requestsState.length && <EmptySuggestion />}
      {requestsState.length &&
        requestsState.map((request) => (
          <Suggestion request={request} key={request.title} />
        ))}
    </main>
  );
};
