import { SortContextProvider } from './components/sort.context';
import { CategoryProvider } from '../../components/MobileModal/category.context';
import { FeedbackBar } from './components/FeedbackBar';
import { SuggestionList } from './components/SuggestionsList/SuggestionList';
import { Header } from '../../components/Header';

export const SuggestionsPage = () => {
  return (
    <>
      <SortContextProvider>
        <CategoryProvider>
          <Header />
          <FeedbackBar />
          <SuggestionList />
        </CategoryProvider>
      </SortContextProvider>
    </>
  );
};
