import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import ResCard from './ResCard'

function ResList() {

    const [images] = useState([
        {
            img: "images/social/1.jpg",
            id: Math.random()
        },
        {
            img: "images/social/2.jpg",
            id: Math.random()
        },
        {
            img: "images/social/3.jpg",
            id: Math.random()
        },
        {
            img: "images/social/16.jpg",
            id: Math.random()
        },
        {
            img: "images/social/5.jpg",
            id: Math.random()
        },
        {
            img: "images/social/6.jpg",
            id: Math.random()
        },
        {
            img: "images/social/7.jpg",
            id: Math.random()
        },
        {
            img: "images/social/8.jpg",
            id: Math.random()
        },
        {
            img: "images/social/9.jpg",
            id: Math.random()
        },
        {
            img: "images/social/10.jpg",
            id: Math.random()
        },
        {
            img: "images/social/11.jpg",
            id: Math.random()
        },
        {
            img: "images/social/12.jpg",
            id: Math.random()
        },
        {
            img: "images/social/13.jpg",
            id: Math.random()
        },
        {
            img: "images/social/14.jpg",
            id: Math.random()
        },
        {
            img: "images/social/15.jpg",
            id: Math.random()
        },
        {
            img: "images/social/16.jpg",
            id: Math.random()
        },
        {
            img: "images/social/17.jpg",
            id: Math.random()
        },
        {
            img: "images/social/18.jpg",
            id: Math.random()
        },
        {
            img: "images/social/19.jpg",
            id: Math.random()
        },
        {
            img: "images/social/1.jpg",
            id: Math.random()
        },
        {
            img: "images/social/21.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/22.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/23.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/24.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/25.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/26.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/27.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/28.jpeg",
            id: Math.random()
        },
        {
            img: "images/social/29.jpeg",
            id: Math.random()
        },
    ])

    return (
        <Row>
            {images.map((image) => {
                return(
                    <Col className="mb-3" md="6" lg="3" >
                            <ResCard image={image} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ResList
