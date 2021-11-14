import React from 'react'
import { Alert, Container } from 'reactstrap'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Breadcrumb from "../components/breadcrumbs/Breadcrumb"

function Directors() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Testimony" />
              
              <Container className="mb-5">
                  <div className="mb-5">
                    <h2 className="fw-bold">Board of Directors</h2>
                    <hr style={{background: "#97135e"}} />
                  </div>

                  <Alert color="primary">Prophetess (Ms.) Lydia Mark King</Alert>
                    <Alert color="info">Apostle Mark King</Alert>
                    <Alert color="success">Madame Nkechi Rosaline Chukwu</Alert>
                    <Alert color="danger">Ranya Kargbo</Alert>
                    <Alert color="default">Ms Suzanne Ben-Jalloh</Alert>

              </Container>

            <Footer/>
        </>
    )
}

export default Directors
