import React from "react"

const Outsourcing = ({outsourcing}) => (
  <section className="section-outsourcing">
    <div className="container">
      <h2 className="section-title">&lt; {outsourcing.title} &gt;</h2>
      <p className="section-desc">{outsourcing.desc}</p>
      <div className="holder-outsourcing">
        <ul className="holder-benefits-list">
          {
            outsourcing.benefits.map((item, i) => {
              return(
                <li className="benefits-list" key={i}>
                  <div className="benefits-list-info">
                    <span className="benefits-list-no">{i + 1}</span>
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.desc}</p>
                    <div className="holder-image">
                      <img src={item.icon} alt={`Benefit Icon ${item.title}`} className="icon"/>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  </section>
)

export default Outsourcing;
