import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookView from './components/BookView';
import Categories from './components/Category';

function App() {
  return (
    <div className="app-container flex">
      <Header />
      <Routes>
        <Route exact path="/" element={<BookView />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
