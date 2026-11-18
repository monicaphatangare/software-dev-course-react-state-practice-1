
import { genres } from "../mock-data/genres";

function GenreList({ currentGenre, handleGenreClick }) {
  return (
    <div>
      <h2>Select Genre</h2>

      <button
        onClick={() => handleGenreClick("All")}
        className={currentGenre === "All" ? "active" : ""}
      >
        All
      </button>

      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => handleGenreClick(genre.name)}
          className={currentGenre === genre.name ? "active" : ""}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenreList;