import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import TestimonyForm from './TestimonyForm'
import { TestimonyVideo } from './TestimonyVideo'

function Testimony() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Testimony" />
              
              <Container>
                   <TestimonyForm/>
                   <TestimonyVideo/>
              </Container>

            <Footer/>
        </>
    )
}

export default Testimony
