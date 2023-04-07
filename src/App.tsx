import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './MovieCollection';
import MovieList from './Movies';
import { Link } from 'react-router-dom';
import MovieList2 from './movie/MovieList2';

function App() {
  return (
    <div>
      <TopBanner saying="Joel Hilton's Movie Mania - Home" />
      <br />
      <MovieList />
      <MovieList2 />

      <p>This is Joel Hilton's entire movie collection site!</p>
    </div>
  );
}

export default App;
