import React, { useEffect, useState } from 'react';
import { fetchHighestRated } from '../api/api';
import Carousel from './Carousel/Carousel';

const HighestRated = () => {
  const [highestRated, setHighestRated] = useState([]);
  useEffect(() => {
    async function getHighestRated() {
      const res = await fetchHighestRated();
      setHighestRated(res);
    }

    getHighestRated();
  }, []);

  return (
    <>
      <h3 className="carousel-title">HighestRated Anime</h3>
      <Carousel itemsList={highestRated}></Carousel>
    </>
  );
};

export default HighestRated;
