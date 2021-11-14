import React from 'react'
import Header from "../../components/Header/Header"
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import Footer from "../../components/Footer"
import ResList from "./ResList"
import { Container } from 'reactstrap'
import { SRLWrapper } from "simple-react-lightbox";

function Responsibility() {
    return (
        <div>
            <Header />
            
                <Breadcrumb title="Corporate Social Responsibility" />

                <Container>
 
                    <p className="fw-light text-dark mb-5 text-center">We look forward to partnering with churches, NGOs, Donors, private sector and well-meaning individuals on projects that spread the word of God to women and children globally.  Please contact us for more information.</p>

                    <SRLWrapper className="mt-5">
                            <ResList />
                      </SRLWrapper>
                </Container>

            <Footer/>
        </div>
    )
}

export default Responsibility

