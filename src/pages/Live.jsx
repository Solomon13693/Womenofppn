import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'
import { Container } from 'reactstrap'

function Live() {
    return (
        <div>
            <Header />
                <Breadcrumb title="Live" />
                <Container className="text-center">
                    
                    {/* <iframe title="live" className="video shadow-lg" id="vidlive-embed-5772" src="https://www.vidlive.co/iframe/5772" allowTransparency="true" allowfullscreen="true"></iframe> */}

                    <iframe className="video shadow-xl" width="100%" height="100%" src="https://www.youtube.com/embed/live_stream?channel=UC-uZ8gkj6gdBy0vdXdsmrsQ" frameborder="0" allow="autoplay; encrypted-media" allowTransparency="true" allowfullscreen="true"></iframe>

                    <div className="m-auto-text-center-mb-5">
                        <a href="https://www.youtube.com/watch?v=kbvKxrVIur8" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary py-3 mb-5">View previous live sections</button>
                        </a>
                    </div>

                </Container>
            <Footer/>
        </div>
    )
}

export default Live
