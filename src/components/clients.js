import React from "react"

const clients = [
  {
    img: require('../assets/images/clients-image-1.png'),
    title: 'Code metro',
    info: 'CodeMetro provides powerful ABA Therapy Software that allows users to optimize time and operate more efficiently on scheduling, billing, clinical data collection, compliance, and payroll. Ofaris assists with long term staff augmentation, providing qualified developers, quality assurance resources, and scrum masters. The success of their involvement has led to an exclusive staffing arrangement and trust since 2015 with multiple teams.',
    logo: require('../assets/images/client-code-metro.png')
  }
]

const Clients = () => (
  <section className="section-clients diagonal">
    <div className="container">
      <h2 className="section-title">&lt; Our Clients &gt;</h2>
      <div className="container-wrapper">
        <div className="holder-clients-info">
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
        </div>
      </div>
    </div>
  </section>
)

export default Clients;
