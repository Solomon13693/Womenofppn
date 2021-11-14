import React from 'react'
import { Link } from 'react-router-dom'
import "./aboutsection.css"

function AboutSection() {
    return (
        <section class="about-section pt-60 mt-5">
            <span class="about-bg"><img src="/images/bg-before-after.png" alt="" /></span>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-left">
                            <div class="about-slider-wrapper">
                                <div class="about-slider-content">
                                    <div class="icon-wrapper">
                                        <i class="flaticon flaticon-factory"></i>
                                    </div>
                                    <div class="content-bottom">
                                        <span>Women Of </span>
                                        <h6>Fire</h6>
                                    </div>
                                </div>
                                <div class="about-compare-slider">
                                    <div class="before-after">
                                        <img src="images/prophetess/16.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-about-right">
                            <div class="about-title-area">
                                <span class="about-subtitle">About </span>
                                <p className="text-dark fw-light">Raising women of substance and integrity, having compassion for lost souls and a strong drive for God’s Kingdom in all nations of the earth</p>
                            </div>
                            <div class="devider"><hr /></div>
                               <Link to="/about"> <button className="btn btn-secondary">Read more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
