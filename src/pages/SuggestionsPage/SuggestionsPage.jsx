import { FeedbackBar } from './components/FeedbackBar';
import { SuggestionList } from './components/SuggestionsList/SuggestionList';
import { CategoryProvider } from '../../components/MobileModal/category.context';
import { Header } from '../../components/Header';

import { SortContextProvider } from './components/sort.context';

// export const SuggestionsPage = () => {
//   return (
//     <>
//       <CategoryProvider>
//         <Header />
//         <FeedbackBar />
//         <SuggestionList />
//       </CategoryProvider>
//     </>
//   );
// };

import { useState, createContext } from 'react';

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

export const SortContext = createContext();
