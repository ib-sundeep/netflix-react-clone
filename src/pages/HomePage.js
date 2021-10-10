import React from 'react';

import MediaSlider from "ui/MediaSlider";
import Banner from "ui/Banner";
import Header from "ui/Header";

function HomeScreen() {
  return (
    <div>
      <Header />
      <Banner />
      <MediaSlider
        mediaType="tv"
        title="NETFLIX ORIGINALS"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
      <MediaSlider
        title="Trending Now"
        path="/trending/all/week"
      />
      <MediaSlider
        mediaType="movie"
        title="Top Rated"
        path="/movie/top_rated"
      />
      <MediaSlider
        mediaType="movie"
        title="Action Movies"
        path="/discover/movie"
        params={{ with_genre: 28 }}
      />
    </div>
  );
}

export default HomeScreen;
