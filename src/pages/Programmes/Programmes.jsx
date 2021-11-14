import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb"
import "./program.css"

function Programmes() {
    return (
        <>
            <Header/>

              <Breadcrumb title="Programmes" />
              
              <Container className="mb-5">

              <section class="services__area pt-115 pb-40">
            <div class="container">

               <div class="row">

                  <div class="col-lg-6">
                     <div class="services__item pink-bg mb-30">
                        <div class="services__content">
                            <h3 className="fw-bolder mb-3 text-white">Yearly Programmes:</h3>
                            <ul className="">
                                <li className="mb-3">Prophetic Rain, Garden of the Prophet : Once a year – (3-days). Held every November.</li>
                                <li className="mb-3">Prophetic Visitation : Fasting and Prayers, three times a year for 30 days every March, July, and September.</li>
                                <li className="mb-3">Praise the Lord Oh Ye Less Privileged – Yearly Visitation, Ministry, and celebration to:</li>
                                <ul>
                                    <li>Widows and Widowers visitation</li> <br />
                                    <li>Orphans</li> <br />
                                    <li>Street Ministry</li> <br />
                                    <li>Prison Visit</li> <br />
                                    <li>Visit the sick in hospitals</li> <br />
                                    <li>Support Motherless babies</li> 
                                </ul>
                            </ul>
                        </div>
                     </div>
                  </div>

                  <div class="col-lg-6">
                     <div class="services__item blue-bg-4 mb-30">
                        <div class="services__content">
                            <h3 className="fw-bold mb-3 text-white">The Daily Prayer Lines:</h3>
                            <ul>
                                <li className="mb-3">Good Morning Jesus” at 6:00 – 7:00 AM GMT. Facebook and YouTube Live.</li>
                                <li className="mb-3">The Healing Wings”. Mondays from 11AM to 11:30 AM GMT. Facebook and YouTube Live.</li>
                                <li className="mb-3">Singles Summit” – Mondays from 3PM to 3.30PM GMT. Facebook and YouTube Live:</li>
                                <li className="mb-3">“O Lord, Visit Me” – Visitation prayers for job seekers, visas, and residency requests. Tuesdays from 3.30 to 4PM GMT. Facebook and YouTube Live </li>
                                <li className="mb-3">“Mounting Top Prayer and Fasting”: Wednesday and Thursday from 6AM to 6PM GMT. Facebook and YouTube Live</li>
                                <li className="mb-3">“Peace in our Home”: For married women. Fridays from 11AM to 11.30AM GMT. Facebook and YouTube Live</li>
                                <li className="mb-3">“Fruitful Mothers’ – Fridays from 3PM to 3.30PM GMT. Facebook and YouTube Live</li>
                                <li className="mb-3">“Testimony”: Saturdays from 11AM to 12 Noon GMT. Facebook and YouTube Live</li>
                                <li className="mb-3">“Children’s Deliverance”: Children that love the Lord meet on Saturdays from 3PM – 3.30PM GMT. Facebook and YouTube Live</li>
                               <li className="mb-3">“General Restoration Prayer”: Sundays and Mondays, twice a day. 11PM GMT and 2AM GMT. Facebook and YouTube Live</li>
                            </ul>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
                  
              </Container>

            <Footer/>
        </>
    )
}

export default Programmes
