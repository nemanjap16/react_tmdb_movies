import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Global style
import { GlobalStyle } from './GlobalStyle';
// Components
import Header from './components/Header';
import HomeFetch from './components/HomeFetch';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomeFetch />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
