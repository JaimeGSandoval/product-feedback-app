import { SortContextProvider } from './components/context/sort.context';
import { CategoryProvider } from '../../components/context/category.context';
import { SuggestionList } from './components/SuggestionsList/SuggestionList';
import { MobileHeader } from '../../components/MobileHeader';
import { Header } from '../../components/Header/Header';
import styles from './_suggestionPage.module.scss';

export const SuggestionsPage = () => {
  return (
    <>
      <SortContextProvider>
        <CategoryProvider>
          <div className={styles.container}>
            <Header />
            <MobileHeader />
            <SuggestionList />
          </div>
        </CategoryProvider>
      </SortContextProvider>
    </>
  );
};
