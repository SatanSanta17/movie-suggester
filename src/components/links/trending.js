import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../singleContent";
import "../css/cards.css";
import CustomPagination from "../CustomPagination";

function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  let provider_name;
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };
  const fetchProvider = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    provider_name = data.provider_name;
  };
  useEffect(() => {
    fetchTrending();
    fetchProvider();
  }, [page]);
  return (
    <div className="trending">
      <h1 className="pageTitle">Trending</h1>
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
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
