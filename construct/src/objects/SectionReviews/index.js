import React from 'react';

import { content } from '../../databases/reviews/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from '../../components/CarouselSlides';

import './style.scss';

const SectionReviews = () => {
  const data = content[0];

  return (
    <section className="reviews-main">
      <div className="reviews-title-wrapper">
        <div className="reviews-title">
          <BigTitle text="TESTIMONIOS" />
        </div>

        <CarouselSlides
          data={data}
          cardWidth="288"
          cardHeight="336"
          maxWidthSlide="100%"
          cardGap="0"
          cardStyle="carousel-card-style-03"
        />
      </div>
    </section>
  );
};

export default SectionReviews;
