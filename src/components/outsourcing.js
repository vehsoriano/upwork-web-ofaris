import React from "react"

const benefits = [
  {
    title: 'Time zone',
    desc: 'Nearshore outsourcing helps eliminate communications obstacles due to different time zones. Argentina is located in UTC-3, meaning we can easily adapt and share most of our working day with your team, whether you are based on the east or the west coast.',
    icon: require('../assets/images/icon-benefits-1.svg')
  },
  {
    title: 'Quality / Cost Balance',
    desc: 'We provide a highly educated workforce that can be employed at half (or lower) costs. This way you would spend much less for the same quality offered by an in-house dev team.',
    icon: require('../assets/images/icon-benefits-2.svg')
  },
  {
    title: 'High Quality',
    desc: 'We provide a highly educated workforce that can be employed at half (or lower) costs. This way you would spend much less for the same quality offered by an in-house dev team.',
    icon: require('../assets/images/icon-benefits-3.svg')
  },
  {
    title: 'Culturally Aligned',
    desc: 'We share a similar mindset and lifestyle with American people. This is key in understanding your project requirements and it allows us to share our point of view about your app features. We can see your projects both as developers as well as potential users because of our cultural similarity.',
    icon: require('../assets/images/icon-benefits-4.svg')
  },
  {
    title: 'Tech Skills',
    desc: 'We share a similar mindset and lifestyle with American people. This is key in understanding your project requirements and it allows us to share our point of view about your app features. We can see your projects both as developers as well as potential users because of our cultural similarity.',
    icon: require('../assets/images/icon-benefits-5.svg')
  },
  {
    title: 'English Profeciency',
    desc: 'We share a similar mindset and lifestyle with American people. This is key in understanding your project requirements and it allows us to share our point of view about your app features. We can see your projects both as developers as well as potential users because of our cultural similarity.',
    icon: require('../assets/images/icon-benefits-6.svg')
  }
]

const Outsourcing = () => (
  <section className="section-outsourcing diagonal">
    <div className="container">
      <h2 className="section-title">&lt; nearshore outsourcing &gt;</h2>
      <p className="section-desc">Nearshore app development is becoming an increasingly viable and useful option for outsourcing. With a world that has embraced the digital era, it’s easy to see why there’s been a subsequent rise in nearshore outsourcing popularity. The fact that you can use Nearshore development teams to build all sorts of software at great rates makes it the preferred option for many companies. When considering Onshoring and Offshoring benefits and Disadvantages, Nearshoring offers benefits combine the best of both worlds:</p>
      <div className="holder-outsourcing">
        <ul className="holder-benefits-list">
          {
            benefits.map((item, i) => {
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
