import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/breadcrumbs/Breadcrumb'
import PartnershipForm from './PartnershipForm'
import { Col, Container, Row } from 'reactstrap'
import Paypal from "../../components/Paypal"
import Flutterwave from "../../components/Flutterwave"

function Partnership() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Partnership" />
              
              <Container>
                  
                   <h2 className="fw-bold">Why become a partner?</h2>

                   <p className="fw-light text-dark mb-5">Womenoffireppn Partners have decided to commit themselves to the cause of Womenoffireppn which is to reach a generation without faith and hope, telling the sweet story of our Lord Jesus Christ and reaching out to a troubled world with His compassion and generosity.</p>

                   <PartnershipForm/>

                   <h2 className="fw-bold text-center my-4">Partnership Donation</h2>

                   <div className="mt-5 text-center">

                        <Row className="mt-3">

                            <Col className=" mb-5" lg="6">
                               <h4 className="fw-bold">Access Bank Plc</h4> 
                               <p className="fw-light text-dark">Naira Account Number: 0041128761</p>
                               <p className="fw-light text-dark">Dollar Account Number: 1438702221</p>
                               <p className="fw-light text-dark">Account Name: Lydia Enyioma Mark King</p>
                            </Col>

                            <Col className="" lg="6">
                               <h4 className="fw-bold">Zenith Bank Plc</h4> 
                               <p className="fw-light text-dark">Account Number: 2080008244</p>
                               <p className="fw-light text-dark">Account Name: Lydia Enyioma Mark King</p>
                            </Col>

                        </Row>

                    </div>

                   <Row className="mb-5 text-center m-auto mt-2">
                        <Col className="mb-4" lg="6"> <Paypal/> </Col>
                        <Col className="mb-5" lg="6"> <Flutterwave/> </Col>
                    </Row>


              </Container>

            <Footer/>
        </>
    )
}

export default Partnership
