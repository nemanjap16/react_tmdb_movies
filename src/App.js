import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Global style
import { GlobalStyle } from './GlobalStyle';
// Components
import Header from './components/Header';
import HomeFetch from './components/HomeFetch';

const App = () => (
  <Router>
    <Header />
    <HomeFetch />
    <GlobalStyle />
  </Router>
);

export default App;
