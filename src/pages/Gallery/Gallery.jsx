import React from 'react'
import Header from "../../components/Header/Header"
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import Footer from "../../components/Footer"
import { Container } from 'reactstrap'
import GalleryList from './GalleryList'
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    return (
        <div>
            <Header />
            
                <Breadcrumb title="Gallery" />

                <Container>
                    <SRLWrapper>
                            <GalleryList/>
                      </SRLWrapper>
                </Container>

            <Footer/>
        </div>
    )
}

export default Gallery
