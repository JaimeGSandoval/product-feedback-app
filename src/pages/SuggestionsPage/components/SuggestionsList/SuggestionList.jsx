import { useContext } from 'react';
import { RequestsContext } from '../../../../context/requests.context';
import { CategoryContext } from '../../../../components/MobileModal/category.context';
import { Suggestion } from '../Suggestion/Suggestion';
import { EmptySuggestion } from '../EmptySuggestion';
import styles from './_suggestionList.module.scss';

export const SuggestionList = () => {
  const retrievedRequests = useContext(RequestsContext);
  const categoryData = useContext(CategoryContext);
  const { category } = categoryData;

  const suggestionStatusRequests = retrievedRequests.filter(
    (req) => req.status === 'suggestion'
  );

  let renderedRequests;

  if (category === 'all') {
    renderedRequests = suggestionStatusRequests;
  } else {
    renderedRequests = suggestionStatusRequests.filter(
      (req) => req.category === category
    );
  }

  return (
    <main className={styles.container}>
      {!renderedRequests.length && <EmptySuggestion />}
      {renderedRequests.length &&
        renderedRequests.map((request) => (
          <Suggestion request={request} key={request.title} />
        ))}
    </main>
  );
};
