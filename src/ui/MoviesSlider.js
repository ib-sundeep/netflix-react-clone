import React, { useState, useEffect } from "react";
import classNames from 'classnames';

import { generateImageUrl, ImageSizes } from "utils/tmdb";
import tmdbApi from 'api/tmdb';

function MoviesSlider({ title, path, params = {}, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await tmdbApi.get(path, params);
      setMovies(json.results);
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="movies-slider">
      <h3 className="movies-slider__title">{title}</h3>
      <div className="movies-slider__cards">
        {movies.map((movie) => (
          <div className="movies-slider__item" key={movie.id}>
            <img
              className={classNames(
                'movies-slider__card',
                { 'movies-slider__card--large': isLarge },
              )}
              src={
                isLarge
                ? generateImageUrl(movie.poster_path, ImageSizes.poster)
                : generateImageUrl(movie.backdrop_path, ImageSizes.card)
              }
              alt={movie.original_title}
            />
            <div className="movies-slider__cover">
              <div className="movies-slider__name">
                {movie.title || movie.name || movie.original_name}
              </div>
              <div className="movies-slider__description">
                {movie.overview}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSlider;
