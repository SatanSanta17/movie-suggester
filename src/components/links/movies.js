import React, { useEffect, useState } from "react";
import SingleContent from "../singleContent";
import axios from "axios";
import CustomPagination from "../CustomPagination";
import Genres from "../genres";
import "../css/cards.css";

function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_monetization_types=flatrate&page=${page}`
    );
    setContent(data.results);
    setNumberOfPages(data.totalPages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div className="movies">
      <h1 className="pageTitle">Movies</h1>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="cards">
        {content &&
          content.map((c) => (
            <SingleContent
              className="card"
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              rating={c.vote_average}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Movies;
