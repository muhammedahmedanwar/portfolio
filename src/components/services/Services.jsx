import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">End-to-End Web Development.</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">End-to-End Web Development</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quilty work to clients and companies.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">proficient in both front-end and back-end technologies, allowing to create complete web applications from start to finish.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Database Management.</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                        <h3 className="services__modal-title">Database Management</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quilty work to clients and companies.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">designing and managing databases, including SQL and NoSQL databases like MySQL, MongoDB.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Testing and Debugging.</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                        <h3 className="services__modal-title">Testing and Debugging</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quilty work to clients and companies.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Writing unit tests, perform integration testing, and debug issues throughout the application stack.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Services