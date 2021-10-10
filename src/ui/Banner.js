import React, { useState, useEffect } from "react";

import { generateImageUrl, ImageSizes } from "utils/tmdb";
import tmdbApi from 'api/tmdb';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const json = await tmdbApi.get('/discover/tv', { with_networks: 213 });
      setMovie(json.results[0]);
    }

    fetchMovie();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${generateImageUrl(movie.backdrop_path || '', ImageSizes.backdrop)})`
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {movie.overview}
        </div>
      </div>
      <div className="banner__cover" />
    </div>
  );
}

export default Banner;
