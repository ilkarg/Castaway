import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.sass';
import { Main } from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
