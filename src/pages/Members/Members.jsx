import React from 'react'
import Header from "../../components/Header/Header"
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import Footer from "../../components/Footer"
import { Container } from 'reactstrap'
import { SRLWrapper } from "simple-react-lightbox";
import MemList from "./MemList"

function Members() {
    return (
        <div>
            <Header />
            
                <Breadcrumb title="Members" />

                <Container>
                    <SRLWrapper>
                            <MemList/>
                      </SRLWrapper>
                </Container>

            <Footer/>
        </div>
    )
}

export default Members
