import React from 'react';
import ReactDOM from 'react-dom';
import { RequestsProvider } from './context/requests.context';
import { UserContextProvider } from './context/user.context';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './utils/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <UserContextProvider>
        <RequestsProvider>
          <App />
        </RequestsProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
