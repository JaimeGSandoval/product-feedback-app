import { Routes, Route } from 'react-router-dom';
import { SuggestionsPage } from './pages/SuggestionsPage/SuggestionsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SuggestionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
