import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'
import { Col, Container, Row } from 'reactstrap'
import Paypal from '../components/Paypal'
import Flutterwave from '../components/Flutterwave'

function Donation() {
    return (
        <div>
            <Header />
                <Breadcrumb title="Support" />
                <Container>

                    <div className="my-5 text-center">
                        <h2 className="fw-bold text-center mb-5">Bank Transfer</h2>
                        
                        <Row className="mb-5">

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

                    <h2 className="fw-bold text-center mb-5">Online Giving</h2>

                    <Row className="mb-5 text-center m-auto">
                        <Col className="mb-4" lg="6"> <Paypal/> </Col>
                        <Col className="mb-5" lg="6"> <Flutterwave/> </Col>
                    </Row>
                </Container>
            <Footer/>
        </div>
    )
}

export default Donation
