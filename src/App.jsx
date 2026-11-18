
import { useState } from "react";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [currentGenre, setCurrentGenre] = useState("All");

  return (
    <div className="container">
      <h1>Movie Genre Selector</h1>

      <GenreList
        currentGenre={currentGenre}
        setCurrentGenre={setCurrentGenre}
      />

      <MovieList currentGenre={currentGenre} />
    </div>
  );
}

export default App;

