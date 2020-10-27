import React, { useEffect, useState } from 'react';
import { fetchTrending } from '../api/api';
import Carousel from './Carousel/Carousel';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getTrending() {
      const res = await fetchTrending();
      setTrending(res);
    }

    getTrending();
  }, []);

  return (
    <>
      <h3 className="carousel-title">Trending Anime</h3>
      <Carousel itemsList={trending}></Carousel>
    </>
  );
};

export default Trending;
