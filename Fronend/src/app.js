import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ]);
  const [newMovieTitle, setNewMovieTitle] = useState('');

  const handleAddMovie = (event) => {
    event.preventDefault();
    const newMovie = { title: newMovieTitle };
    setMovies([...movies, newMovie]);
    setNewMovieTitle('');
  };

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          value={newMovieTitle}
          onChange={(event) => setNewMovieTitle(event.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieList;