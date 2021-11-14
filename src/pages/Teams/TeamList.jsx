import React, { useState } from 'react'
import { Col } from 'reactstrap'
import TeamCard from './TeamCard'
import { SRLWrapper } from "simple-react-lightbox";

function TeamList() {
    const [teams] = useState([
        {
            name: "PROPHETESS LYDIA MARK KING",
            img: "/images/teams/PROPHETESS.jpg",
            country: ""
        },
        {
            name: "JULIET HOWELL",
            img: "/images/teams/juliet.jpg",
            country: ""
        },
        {
            name: "SISTERS KORAY AND MINELLA",
            img: "/images/teams/koray.jpg",
            country: ""
        },
        {
            name: "CHINYERE EZANWA",
            img: "/images/teams/CHINYERE.jpg",
            country: ""
        },
        {
            name: "HANNAH",
            img: "/images/teams/HANNAH.jpg",
            country: "Sierra Leone"
        },
        {
            name: "JENNEY",
            img: "/images/teams/jenney.jpg",
            country: "UK"
        },
        {
            name: "",
            img: "/images/teams/ghana.jpg",
            country: "Ghana"
        },
        {
            name: "ADEBUISI",
            img: "/images/teams/ADEBUISI.jpg",
            country: ""
        },
        {
            name: "PAMELA THOMAS",
            img: "/images/teams/pamela.jpg",
            country: ""
        },
        {
            name: "ELLEN HEAVENS",
            img: "/images/teams/ELLEN.jpg",
            country: ""
        },
        {
            name: "",
            img: "/images/teams/Liberia.jpg",
            country: "Liberia"
        },
        {
            name: "DANIELLA",
            img: "/images/teams/daniella.jpg",
            country: ""
        },
        {
            name: "VERONICA",
            img: "/images/teams/VERONICA.jpg",
            country: ""
        },
        {
            name: "EVENLY COLE",
            img: "/images/teams/EVENLY.jpg",
            country: ""
        },
        {
            name: "ALICE",
            img: "/images/teams/ALICE.jpg",
            country: ""
        },
        {
            name: "RANYA",
            img: "/images/teams/RANYA.jpg",
            country: ""
        },
        {
            name: "MINELLA",
            img: "/images/teams/MINELLA.jpg",
            country: ""
        },
        {
            name: "VERONICA",
            img: "/images/teams/VERONICA2.jpg",
            country: ""
        },
        {
            name: "ADEBISI",
            img: "/images/teams/ADEBISI.jpg",
            country: ""
        },
        {
            name: "SAMUELLA",
            img: "/images/teams/SAMUELLA.jpg",
            country: ""
        },
        {
            name: "SUZANNE",
            img: "/images/teams/SUZANNE.jpg",
            country: ""
        },
        {
            name: "MINELLA",
            img: "/images/teams/MINELLA2.jpg",
            country: ""
        },
        {
            name: "YAHMAM",
            img: "/images/teams/YAHMAM.jpg",
            country: ""
        },
        {
            name: "EVENLY",
            img: "/images/teams/EVENLY2.jpg",
            country: ""
        },
    ])
    return (
        <SRLWrapper>
        <div className="row">
            {teams.map((team) => {
                return(
                   <Col lg="3" md="6" > <TeamCard key={team.img} team={team}/> </Col>
                )
            })}
        </div>
        </SRLWrapper>
    )
}

export default TeamList
