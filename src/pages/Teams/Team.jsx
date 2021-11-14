import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import TeamList from './TeamList'

function Team() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Our Teams" />
              
              <Container className="mb-5">
                    <TeamList/>
              </Container>

            <Footer/>
        </>
    )
}

export default Team
