import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/breadcrumbs/Breadcrumb'
import PrayerForm from './PrayerForm'
import { Container } from 'reactstrap'

function Prayer() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Prayer Request" />
              
              <Container>
                   <PrayerForm/>
              </Container>

            <Footer/>
        </>
    )
}

export default Prayer
