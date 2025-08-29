import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

// Mock movie data for the home page
const mockMovies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Trolls" },
  { id: 3, title: "Jack Reacher: Never Go Back" }
];

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Use mock data instead of fetch
    setMovies(mockMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
};

export default Home;