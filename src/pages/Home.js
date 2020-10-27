import React from 'react';
import Popular from '../components/Popular';
import Trending from '../components/Trending';
import HighestRated from '../components/HighestRated';

const Home = () => {
  return (
    <>
      <section className="main">
        <h2>¿Qué quieres ver hoy?</h2>
        <input type="text" className="search-input" placeholder="Buscar..." />

        <Trending></Trending>
        <Popular></Popular>
        <HighestRated></HighestRated>
      </section>
    </>
  );
};

export default Home;
