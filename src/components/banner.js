import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';

import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';

const Banner = ({banner}) => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="section-banner" id="home">
      <div className="container">      
        { banner.title }
        <div className="holder-details">
          <Swiper getSwiper={updateSwiper}>
            {
              banner.details.map((item, i) => {
                return(
                    <div className="holder-slide" key={i}>
                      <h4 className="details-title">&lt; {item.title} &gt;</h4>
                      <h5 className="details-subtitle">{item.subtitle}</h5>
                      <p className="details-description">{item.desc}</p>
                    </div>
                    )
                  })
                }
          </Swiper>
          <div className="holder-swiper-button">
            <button onClick={goPrev} className="swiper-button left">
              <img src={arrowLeft} alt="Arrow Left"/>
            </button>
            <button onClick={goNext} className="swiper-button right">
              <img src={arrowRight} alt="Arrow Left"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
