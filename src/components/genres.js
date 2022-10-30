import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  setSelectedGenres,
  selectedGenres,
  setGenres,
  genres,
  type,
  setPage,
}) => {
  // const handleAdd = (genre) => {
  //   setSelectedGenres([...selectedGenres, genre]);
  // };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchGenres();
    // return () => {
    //   setGenres({});
    // };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        padding: "6px 0",
      }}
    >
      {genres.map((genre) => {
        <Chip lable={genre.name} clickable size="small" key={genre.id} />;
      })}
      {/* hello */}
    </div>
  );
};

export default Genres;
