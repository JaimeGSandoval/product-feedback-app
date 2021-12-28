import { Header } from '../../components/Header';
import { FeedbackBar } from './components/FeedbackBar';
import { EmptySuggestion } from './components/EmpySuggestion/EmptySuggestion';

export const SuggestionsPage = () => {
  return (
    <>
      <Header />
      <FeedbackBar />
      <EmptySuggestion />
    </>
  );
};
