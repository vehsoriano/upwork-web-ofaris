import React from "react"
import SoftwareDevelopment  from '../assets/images/services-software-development.svg';
import ItTalent  from '../assets/images/services-it-talent.svg';
import DedicatedTeams from '../assets/images/services-dedicated-teams.svg';
import UiDesign  from '../assets/images/services-ui-design.svg';
import QualityAssurance  from '../assets/images/services-quality-assurance.svg';
import LegacySystem from '../assets/images/services-legacy-system.svg';


const services = [
  {
    image: SoftwareDevelopment,
    title: 'Software Development',
    desc: 'High-end software, from architecture design to implementation, launch and ongoing maintenance.',
    link: ''
  },
  {
    image: ItTalent,
    title: 'IT Talent Augmentation',
    desc: 'Expand your in-house software development capabilities by choosing the right type of cooperation model that fits your project size,',
    link: ''
  },
  {
    image: DedicatedTeams,
    title: 'Dedicated Teams',
    desc: 'Solid base team delivering optimal results with full transparency. We ensure a motivated and productive team driven by performance',
    link: ''
  },
  {
    image: UiDesign,
    title: 'UI/UX Design',
    desc: 'Creativity, innovation and design thinking that inspires your clients. Better user experience design, rapid prototyping and navigation flow,',
    link: ''
  },
  {
    image: QualityAssurance,
    title: 'Quality Assurance',
    desc: 'We ensure the highest quality software by providing a powerful testing strategy and methodology into the development lifecycle.',
    link: ''
  },
  {
    image: LegacySystem,
    title: 'Legacy System Modernization',
    desc: 'Trusted software eventually becomes obsolete. When legacy systems lead to loss of competitiveness then it is time to upgrade,',
    link: ''
  }
]

const Services = () => (
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
