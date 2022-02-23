import React from 'react'
import Banner from '../../components/Banner'
import CardDatas from '../../data/CardData'

import {
    Container,
    Row,
    Col,
    Button,
  } from "reactstrap";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import TransparentHeader from '../../components/Header/TransparentHeader';
import AboutSection from "./AboutSection"
import RowCard from './RowCard';

function Home() {
    return (
        <div>

            <TransparentHeader/>

            <Banner/>

            <AboutSection/>

              <div className="home_card_section my-5">
                 <Row className="container m-auto pt-100 pb-100 align-items-center">

                     <Col lg="9">
                        <Row>
                                {CardDatas.map((card) => {
                                    return(
                                        <Col lg="4" md="6">
                                        <RowCard card={card} />
                                        </Col>
                                    )
                                })}
                        </Row>
                     </Col>

                    <Col lg="3" >
                            <div>
                                <div class="abv2-feedback-right">
                                    <div class="title-style-2">
                                        <h3 className="text-white" >We are a prophetic prayer network for women.</h3>
                                        <p>We are a prophetic prayer network for women,  by women, where every women's life are transformed by God's word for healing, deliverance, lifting, encounters and liberation.</p>
                                    </div>
                                </div>
                            </div>
                    </Col>

                 </Row>
              </div>

              <Container>

              <section class="banner__area pb-110 mb-5">
            <div class="container">
               <div class="row">

                  <div class="col-xxl-6 hello col-xl-6 col-lg-6 col-md-6 mb-4">
                     <div class="banner__item banner__item1 p-relative mb-40"  >
                        <div class="banner__content">
                           <span><i className="fas fa-podcast"></i> Online Service</span>

                              <p className="banner__title">You can also join us online for any <br /> of our events, if you are unable to <br /> make it you can watch <br /> our past events here.</p>
  
                              <Button tag={Link} to="/live" className="btn-neutral">Watch Us <i className="fas fa-video"></i> </Button>

                        </div>
                        <div class="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                           <img src="/images/banner-img-1.png" alt="" />
                        </div>
                     </div>
                  </div>

                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div class="banner__item banner__item2 p-relative mb-40 py-5">
                        <div class="banner__content">
                           <span class="orange"><i className="fas fa-hand-holding-usd"></i> Donate</span>
                              <p className="banner__title">You can support this mission to <br /> reach out to more women <br /> across the glob</p>
                           
                              <Button tag={Link} to="/support" className="btn-neutral">Give online <i className="fas fa-money-bill-wave"></i> </Button>

                        </div>
                        <div class="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                           <img src="/images/banner-img-2.png" alt="" />
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
            
            </Container>

            <Footer/>
       
        </div>
    )
}

export default Home
