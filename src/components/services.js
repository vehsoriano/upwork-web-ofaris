import React from "react"

const Services = ({services}) => (
  <section className="section-services" id="service">
    <div className="container">
      <h2 className="section-title">&lt; Our Services &gt;</h2>
      <div className="holder-services">        
      {
        services.map((item, i) => {
            return(
              <div className="holder-details" key={i}>
                  <div className="holder-logo">
                      <img className="logo" src={item.image} alt="Choose us logo"/>
                  </div>
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                  <a href={item.link} className="link">&lt; Read More &gt;</a>
              </div>
            )
        })
      }
      </div>
    </div>
  </section>
)

export default Services;
