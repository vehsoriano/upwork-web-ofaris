import React from "react"
import ClientImage from '../assets/images/clients-image-1.png';
import ClientCodeMetro from '../assets/images/client-code-metro.png';

const Clients = () => (
  <section className="section-clients diagonal">
    <div className="container">
      <h2 className="section-title">&lt; Our Clients &gt;</h2>
      <div className="holder-clients">
        <div className="holder-clients-info">
          <div className="holder-image">
              <img src={ ClientImage } className="client-image" alt="Client Logo"/>
          </div>
          <div className="holder-info">
            <p className="info-title">Code metro</p>
            <p className="info-desc">CodeMetro provides powerful ABA Therapy Software that allows users to optimize time and operate more efficiently on scheduling, billing, clinical data collection, compliance, and payroll. Ofaris assists with long term staff augmentation, providing qualified developers, quality assurance resources, and scrum masters. The success of their involvement has led to an exclusive staffing arrangement and trust since 2015 with multiple teams.</p>
            <div className="holder-info-logo">
              <img src={ ClientCodeMetro } className="client-logo" alt="Client Logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Clients;
