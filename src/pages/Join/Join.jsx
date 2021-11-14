import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import JoinForm from './JoinForm'

function Join() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Join Us" />
              
              <Container className="mb-5">
                   <JoinForm/>
              </Container>

            <Footer/>
        </>
    )
}

export default Join
