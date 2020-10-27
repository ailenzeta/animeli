import React, { useEffect, useState } from 'react';
import { fetchPopular } from '../api/api';
import Carousel from './Carousel/Carousel';

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    async function getPopular() {
      const res = await fetchPopular();
      setPopular(res);
    }

    getPopular();
  }, []);

  return (
    <>
      <h3 className="carousel-title">Most Popular Anime</h3>
      <Carousel itemsList={popular}></Carousel>
    </>
  );
};

export default Popular;
