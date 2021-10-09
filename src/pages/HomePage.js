import React from 'react';

import MoviesSlider from "ui/MoviesSlider";
import Banner from "ui/Banner";
import Header from "ui/Header";

function HomeScreen() {
  return (
    <div>
      <Header />
      <Banner />
      <MoviesSlider
        title="NETFLIX ORIGINALS"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
      <MoviesSlider title="Trending Now" path="/trending/all/week" />
      <MoviesSlider title="Top Rated" path="/movie/top_rated" />
      <MoviesSlider
        title="Action Movies"
        path="/discover/movie"
        params={{ with_genre: 28 }}
      />
    </div>
  );
}

export default HomeScreen;
