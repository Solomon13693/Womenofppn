import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'


function History() {
    return (
        <div>
            <Header />

                <Breadcrumb title="Our History" />

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 mt-4">

                            <p className="fw-light text-dark mb-4">In November 26, 2017 Prophetess (Mrs.) Lydia Mark King, while in Texas, United States on a prophetic and prayer Ministry Assignment, was having a quiet time, when God visited her and told her that he had a specific assignment for her to deliver women from bondage and lead them to him. At that time, she was an Assistant Pastor to Apostle Mark King, her husband, Leader and General Overseer at Shalom Covenant Chapel.</p>

                            <p className="fw-light text-dark mb-4">God wanted her to create a Ministry for Women who needed God in their lives, women with marital problems, women looking or the fruit of the womb, women who were single and wanted to get married, women who were bereaved, women who wanted to get closer to the word of God; women plagued by ancestral and spiritual manipulation and curses., widow, motherless babies; all women all over the world. God wanted her to create a Ministry and prayer line that will draw millions of women to the word of God. On the next day, she heard again, the voice of the Lord again in her quiet enclosure. God directed her to start immediately and seek support from other sisters as the time was ‘now’.
                            </p>

                            <p className="fw-light text-dark mb-4">She immediately called some of her Prayer Sisters – Sister Minella Thomas and Sister Chinyere Ezenwa and explained the message from God. Sister Minella invited Sister Suzanne Ben-Jalloh, Reverend Sarah Samura and Sister Gloria xxx .  The name ‘Women of Fire Prophetic Prayer Network” (WOFPPE) was revealed during the visitation together with the scriptures 1st King 18:24 and Acts 10:38. The Women of Fire Prophetic Prayer Network was launched, and the prayer line started immediately with the six (6) women. Prophetess (Mrs.) Lydia Mark King then asked the six (6) sisters to invite other people.</p>

                            <p className="fw-light text-dark mb-5">2021, is the fourth year of Women of Fire Prophetic Prayer Network  led by the founder and General Overseer Prophetess (Mrs.) Lydia Mark King. The Ministry has presence in Europe, Africa, North America (USA and Canada), Australia, Asia, and the Middle East. Supporting hundreds of women in the Prayer Line and Prophetic Ministry.</p>

                        </div>

                        <div className="col-lg-6 align-self-center text-center">
                              <img className="img-fluid" src="/images/prophetess/8.jpg" alt="" />
                        </div>

                    </div>

                </div>

            <Footer/>
        </div>
    )
}

export default History
