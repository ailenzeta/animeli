import React from 'react';
import moment from 'moment';
import './CarouselItem.css';

import playImg from '../../assets/play-icon.png';

import moreInfoImg from '../../assets/plus-icon.png';

const relativeDate = (dateStr) => moment(dateStr, 'YYYY-MM-DD').fromNow();

const CarouselItem = ({ imageUrl, title, subtitle, slug, youtubeVideoId, startDate }) => {
  return (
    <div className="carousel-item">
      <img src={imageUrl} alt="" />
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=D9iTQRB4XRk" title="Watch trailer" target="_blank" rel="noreferrer">
            <img src={playImg} alt="Play" />
          </a>
          <a
            href="https://kitsu.io/explore/anime/hunter-x-hunter-2011"
            title="See more"
            target="_blank"
            rel="noreferrer"
          >
            <img src={moreInfoImg} alt="More info" />
          </a>
        </div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>Released: {relativeDate(startDate)}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
