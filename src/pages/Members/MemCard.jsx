import React from 'react'
import "./member.css"

function MemCard({image}) {
    return (
        <section class="bixol-team-area">
        <div class="bixol-team-container bixol-team-slider">
            <div class="bixol-team-single">
                <div class="bixol-img-wrapper text-center m-auto">
                    <img src={image.img} alt="" />
                </div>
                <div class="bixol-team-content">
                    <p className="fw-light text-dark">Women of Fire Prophetic Prayer Network Members</p>
                </div>
            </div>
        </div>
</section>
    )
}

export default MemCard
