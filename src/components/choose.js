import React from "react"

const ChooseUs = ({whyUs}) => (
  <section className="section-why-choose">
    <div className="container">
        <h2 className="section-title">&lt; Why Choose Us &gt;</h2>
        <div className="holder-why-choose">
            {
                whyUs.map((item, i) => {
                    return(
                        <div className="holder-details" key={i}>
                            <div className="holder-logo">
                                <img className="logo" src={item.image} alt="Choose us logo"/>
                            </div>
                            <p className="title">{item.title}</p>
                            <p className="desc">{item.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  </section>
)

export default ChooseUs;
