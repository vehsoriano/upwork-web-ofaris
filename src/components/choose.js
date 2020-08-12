import React from "react"
import ChooseIconSafe  from '../assets/images/choose-icon-1.png';
import ChooseIconGuarantee  from '../assets/images/choose-icon-2.png';
import ChooseIconSupport from '../assets/images/choose-icon-3.png';

const whyUs = [
    {
        image: ChooseIconGuarantee,
        title: '99% uptime guarantee',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis massa neque, eget tempor lorem pretium varius. Nullam euismod mattis ligula, sit amet semper diam.'
    },
    {
        image: ChooseIconSafe,
        title: 'safe and secure',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis massa neque, eget tempor lorem pretium varius. Nullam euismod mattis ligula, sit amet semper diam.'
    },
    {
        image: ChooseIconSupport,
        title: 'our dedicated support',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis massa neque, eget tempor lorem pretium varius. Nullam euismod mattis ligula, sit amet semper diam.'
    }
]

const ChooseUs = () => (
  <section className="section-why-choose diagonal">
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
