import React from "react"
import { Form } from "react-bootstrap"

const contactCountry = [
  {
    icon: require('../assets/images/icon-country.svg'),
    country: 'Uruaguay',
    streetAddress: 'COLONIA 981 AP 305',
    city: 'MONTEVIDEO'
  },
  {
    icon: require('../assets/images/icon-country.svg'),
    country: 'Argentina',
    streetAddress: 'Av Santa Fe 2631 1F',
    city: 'Buenos Aires'
  },
  {
    icon: require('../assets/images/icon-country.svg'),
    country: 'Usa',
    streetAddress: '3020 Rowena Ave',
    city: 'Los Angeles, California'
  }
]

const Contact = () => {
  return (
    <>
      <section className="section-contact banner" id="contact">
        <div className="container">
          <div className="holder-contact-banner">
            <h3 className="banner-title">&lt; We play in your team &gt;</h3>
          </div>
        </div>
      </section>

      <section className="section-contact">
        <div className="container">
          <h2 className="section-title">&lt; Contact Us &gt;</h2>
          <div className="holder-contact">
            <div className="holder-form">
              <Form className="holder-form-group">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="" />
                  <Form.Label>&lt;Name&gt;</Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="" />
                  <Form.Label>&lt;Email address&gt;</Form.Label>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows="1" />
                  <Form.Label>&lt;Type your message here&gt;</Form.Label>
                </Form.Group>
                
                <div className="holder-button">
                  <button className="button button-submit" type="submit">
                    &lt; Send &gt;
                  </button>
                </div>
              </Form>
            </div>
            <div className="holder-form-image">
              {/* <img src={FormImage} className="form-image" alt="Contact Form"/> */}
            </div>
          </div>
          <div className="holder-contact-country">
            <ul className="contact-country-list">
              {
                contactCountry.map((item, i) => {
                  return(
                    <li className="country-list" key={i}>
                      <div className="holder-icon">
                        <img src={item.icon} alt={`Benefit ${item.country}`} className="icon"/>
                      </div>
                      <p className="country">&lt; {item.country} &gt;</p>
                      <p className="street">{item.streetAddress}</p>
                      <p className="city">{item.city}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <p className="contact-email">INFO@OFARIS.COM</p>
        </div>
      </section>
    </>
  )
}

export default Contact;
