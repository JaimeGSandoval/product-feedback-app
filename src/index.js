import React from 'react';
import ReactDOM from 'react-dom';
import { RequestsProvider } from './context/requests.context';
import { UserContextProvider } from './context/user.context';
import { IDsCountProvider } from './context/ids.context';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './utils/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <UserContextProvider>
        <IDsCountProvider>
          <RequestsProvider>
            <App />
          </RequestsProvider>
        </IDsCountProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
