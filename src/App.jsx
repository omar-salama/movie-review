import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="container mx-auto my-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
