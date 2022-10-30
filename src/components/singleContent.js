import React from "react";
import "./css/singleContent.css";
import { img_300, unavailable } from "../config";
import { Badge } from "@material-ui/core";
const singleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  rating,
  provider_name,
}) => {
  return (
    <div className="media" id={id}>
      <Badge
        badgeContent={rating}
        color={rating < 7.5 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Show" : "Movie"}
      </span>
      <span className="subTitle">{provider_name}</span>
      <span className="subTitle">{date}</span>
    </div>
  );
};

export default singleContent;
