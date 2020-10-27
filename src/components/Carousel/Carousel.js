import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css';

const Carousel = ({ itemsList = [] }) => {
  return (
    <section className="carousel">
      <div>
        {itemsList.map(({ id, attributes: { titles, posterImage, slug, youtubeVideoId, startDate } }) => {
          return (
            <CarouselItem
              key={id}
              imageUrl={posterImage.large}
              title={titles.en}
              subtitle={titles.ja_jp}
              slug={slug}
              youtubeVideoId={youtubeVideoId}
              startDate={startDate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
