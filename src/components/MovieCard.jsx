// components/MovieCard.js
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2> {/* Make sure this is displaying the title */}
      <Link to={`/movie/${movie.id}`}>
        View Info
      </Link>
    </article>
  );
};

export default MovieCard;