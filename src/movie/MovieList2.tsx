import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

function MovieList2() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('https://localhost:44384/movie')
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, []);

  //const fetchMovie = async () => {
  //const rsp = await fetch('https://localhost:44384/movie');
  //const temp = await rsp.json();
  //setMovieData(temp);
  //};

  //fetchMovie();

  return (
    <>
      <div className="row">
        <h4>Joel Hilton's Movie List</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.MovieId}>
              <td>{m.MovieId}</td>
              <td>{m.Category}</td>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
              <td>{m.LentTo}</td>
              <td>{m.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList2;
