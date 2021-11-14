import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import RepList from './RepList'

function Representatives() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Countries Representatives" />
              
              <Container>
                  <h2 className="fw-bold">Women of Fire Countries representatives</h2>
                  <hr className="mb-5" style={{width: "100%"}} />
                  <RepList />
              </Container>

            <Footer/>
        </>
    )
}

export default Representatives
