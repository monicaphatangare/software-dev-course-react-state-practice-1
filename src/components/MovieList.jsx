
import { movies } from "../mock-data/movies";

function MovieList({ currentGenre }) {
  const filteredMovies =
    currentGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === currentGenre);

  return (
    <div>
      <h2>Movie List</h2>

      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.yearReleased}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;