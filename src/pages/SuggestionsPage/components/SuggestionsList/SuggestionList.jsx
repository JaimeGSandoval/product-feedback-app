import { useContext } from 'react';
import { RequestsContext } from '../../../../context/requests.context';
import { Suggestion } from '../Suggestion/Suggestion';
import { EmptySuggestion } from '../EmptySuggestion';
import styles from './_suggestionList.module.scss';
import data from '../../../../data/data.json';

export const SuggestionList = () => {
  const requests = useContext(RequestsContext);
  const requestSuggestions = requests.productRequests.filter(
    (request) => request.status === 'suggestion'
  );

  return (
    <main className={styles.container}>
      {!data.productRequests ? (
        <EmptySuggestion />
      ) : (
        requestSuggestions.map((request) => (
          <Suggestion request={request} key={request.title} />
        ))
      )}
    </main>
  );
};
