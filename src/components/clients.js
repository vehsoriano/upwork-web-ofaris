import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';


const Clients = ({clients}) => {
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
    <section className="section-clients" id="clients">
      <div className="container">
        <h2 className="section-title">&lt; Our Clients &gt;</h2>
        <div className="container-wrapper">
          <div className="wrapper-clients">
            <div className="holder-clients-swiper">
              <Swiper getSwiper={updateSwiper}>
                {
                  clients.map((item, i) => {
                    return(
                      <div className="holder-clients" key={i}>
                        <div className="holder-image" style={{ backgroundImage: `url(${item.img})` }} >
                            {/* <img src={ ClientImage } className="client-image" alt="Client Logo"/> */}
                        </div>
                        <div className="holder-info">
                          <p className="info-title">{item.title}</p>
                          <p className="info-desc">{item.info}</p>
                          <div className="holder-info-logo">
                            <img src={ item.logo } className="client-logo" alt="Client Logo"/>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </Swiper>
            </div>
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
      </div>
    </section>
  )
}

export default Clients;
