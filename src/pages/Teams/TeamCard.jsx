import React from 'react'
import "./team.css"

function TeamCard({team}) {
    return (
        <section class="bixol-team-area cursor">
            <div class="bixol-team-container bixol-team-slider">
                <div class="bixol-team-single">
                    <div class="bixol-img-wrapper text-center m-auto">
                        <img src={team.img} alt="" />
                    </div>
                    <div class="bixol-team-content">
                        <a href="#"><h5>{team.name}</h5></a>
                        <span>{team.country}</span>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default TeamCard
