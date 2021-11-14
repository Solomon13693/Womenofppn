import React from 'react'
import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/breadcrumbs/Breadcrumb'
import "./about.css"
import Footer from '../../components/Footer'

function About() {
    return (
        <div>
            {/* Header */}
            <Header/>

            {/* Breadcrumb */}
            <Breadcrumb title="About Us" />

            {/* body */}

        <section class="bixol-service-section pb-5">
        <div class="container">
            <div class="row align-items-center">
              
                <div class="col-lg-4">
                    <div class="bixol-services">

                        <div class="bixol-service-item">
                            <div class="bixol-icon-wrapper">
                            </div>
                            <div class="bixol-service-content">
                                <p>The prophetic prayer network have been centered in Lagos, Nigeria. Today <strong className="fw-bold">WOFPPN</strong> have been taking to United Kingdom, United State, Canada, Japan, Lithuania, Jamaica, Germany, Liberia, Jordan, Ethiopia, Gambia, Sierra Leone, Ghana and The Netherlands through fervent prayer warriors (country representative). .</p>
                            </div>
                        </div>

                        <div class="bixol-service-item">
                            <div class="bixol-icon-wrapper">
                            </div>
                            <div class="bixol-service-content">
                                <p>Women of fire prophetic prayer network <b className="fw-bold">(WOFPPN)</b> is a nonprofit organisation that reinvest income above expenses in mission work and other ministries around the world. </p>
                            </div>
                        </div>

                        <div class="bixol-service-item">
                            <div class="bixol-icon-wrapper">
                            </div>
                            <div class="bixol-service-content">
                                <p>We are prayer network who <b className="fw-bold">INTERCEDE</b> to God constantly on behalf of the women, children, home & family for its members, <b className="fw-bold">ENCOURAGE</b> and <b className="fw-bold">EQIUPPED</b> members to develop prayer life.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="bixol-service-middle">
                        <div class="img-wrapper">
                            <img src="/images/founderImg.png" alt="" />
                            <div class="banner-content">
                                <span class="banner-svg-1"></span>
                                <span class="banner-svg-2"></span>
                                <p>WOFPPN</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="bixol-services">
                        
                        <div class="bixol-service-item">
                            <div class="bixol-service-content">
                                <p>Raising women of substance and integrity, having compassion for lost souls and a strong drive for God’s Kingdom in all nation of the earth. We are made-up of prayerful women all over the world, united in God’s word and need for salvation, mercy and support.</p>
                            </div>
                        </div>

                        <div class="bixol-service-item">
                            <div class="bixol-service-content">
                                <p>The prayer network share concerns, testimonies, prayer request and fasting with praying in total submission to God..</p>
                            </div>
                        </div>

                        <div class="bixol-service-item">
                            <div class="bixol-service-content">
                                <p>Our prayer Network believes in healing, deliverances, miracles and restorations where spiritual mysteries (communion, tongues speaking, feet washing and sprinkling of blood) are reenact.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

        {/* Footer */}

        <Footer/>

        </div>
    )
}

export default About
