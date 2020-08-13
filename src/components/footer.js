import React from "react"

const footer = {
  logo: require('../assets/images/logo-footer.svg'),
  desc: 'We are a company that provides high quality software development, outsourcing and IT staff augmentation services with a combination of engineering, innovation and design for any kind of industry around the world. Contact with us info@ofaris.com',
  year: 'Ofaris © 2015-2020',
  categories: [
    {
      name: 'Home',
      link: 'home'
    },
    {
      name: 'Services',
      link: 'service'
    },
    {
      name: 'Clients',
      link: 'clients'
    },
    {
      name: 'Contract',
      link: 'contract'
    }
  ],
  services: [
    { title: 'Software development' },
    { title: 'It Talent Augmentation' },
    { title: 'Dedicated Teams' },
    { title: 'Ui/Ux Design' },
    { title: 'Quality Assurance' },
    { title: 'Legacy System Modernization' },
  ],
  socials: [
    {
      icon: <i className="fab fa-twitter"></i>,
      link: ''
    },
    {
      icon: <i className="fab fa-instagram"></i>,
      link: ''
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
      link: ''
    },
    {
      icon: <i className="fab fa-behance"></i>,
      link: ''
    },
  ]
}

const Footer = () => (
  <footer className="footer">
    <div className="container ">
      <div className="holder-footer">
        <div className="footer-about">
          <div className="holder-logo">
            <img
              src={footer.logo}
              className="footer-logo d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </div>
          <p className="about-desc">{footer.desc}</p>
          <p className="about-year">{footer.year}</p>
        </div>
        <div className="footer-categories">
          <p className="footer-title">Categories</p>
          <ul className="footer-category-list">
            {
              footer.categories.map((item, i) => {
                return (
                  <li className="category-list" key={i}>
                    <a href={`#${item.link}`} className="category-link">{item.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="footer-services">
          <p className="footer-title">Our Services</p>
          <ul className="footer-services-list">
            {
              footer.services.map((item, i) => {
                return (
                  <li className="services-list" key={i}>
                    <p className="title">{item.title}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="footer-socials">
          <p className="footer-title">Let's Connect</p>
          <ul className="footer-socials-list">
            {
              footer.socials.map((item, i) => {
                return (
                  <li className="socials-list" key={i}>
                    <a href={item.link} className="socials-link">
                      {item.icon}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
