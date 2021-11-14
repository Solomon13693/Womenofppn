import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'


function Prophetess() {
    return (
        <div>
            <Header />

                <Breadcrumb title="About Prophetess (Mama Lydia) " />

                <div className="container">

                    <div className="row">

                    <div className="col-lg-6 align-self-center text-center">
                              <img className="img-fluid" src="/images/founderImg.png" alt="" />
                              <h4 style={{color:"#97135e"}} className="fw-bold">Prophetess (Mrs.) Lydia Mark King</h4>
                              <p className="fw-light text-dark">President/Founder</p>
                        </div>

                        <div className="col-lg-6 mt-4">

                            <p className="fw-light text-dark mb-4">Prophetess (Mrs.) Lydia Mark King hails from Igbere in Bende Local Government of Abia State of Nigeria. Mama Lydia as she is fondly called by all members of “Women of Fire Prophetic Prayer Network’  is married to Apostle Mark King (General Overseer at Shalom Covenant Chapel) and they are blessed with a beautiful daughter, Ngozi Mark King. She works with Apostle Mark King as Assistant Pastor at Shalom Covenant Chapel.</p>

                            <p className="fw-light text-dark mb-4">
                            Mama Lydia attended primary and secondary school in Aba. She also attended Lagos State University where she studied Public Administration and graduated with Honors.  She was blessed with a Prophetic gift at an early age and has spent decades of her life in Ministry, serving the Lord and prophesizing.
                            </p>

                            <p className="fw-light text-dark mb-4">Mama Lydia comes from a family that dedicates their life to Gods work and Ministers of the Gospel.  Her father (of blessed Memory) was Reverend Esobeonu Church, General Overseer and Leading Pastor at “Light of God Ministry’.  Her Mother is a renowned Prophetess in Nigeria, Prophetess Nkechi Rosaline who still resides in Aba, Abia State.</p>

                            <p className="fw-light text-dark mb-4">Mama Lydia loves praying and dedicates her days and nights to her prayer lines and delivering the word of God. She also loves cooking, praise singing and doing street evangelism to save more souls. She travels all over the world to preach at churches and spread the word of God. She is a true servant of God.</p>

                            <p className="fw-light text-dark mb-5">Mama Lydia wants to grow the network of women to millions of followers with a global footprint.  Join us today!</p>

                        </div>

                    </div>

                </div>

            <Footer/>
        </div>
    )
}

export default Prophetess
