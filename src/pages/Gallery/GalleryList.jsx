import React, {useState} from 'react'
import { Col } from 'reactstrap'
import GalleryCard from "./GalleryCard"

function GalleryList() {

    const [images] = useState([
        {
            img: "images/gallery/59.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/41.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/2.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/3.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/42.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/43.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/4.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/6.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/1.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/7.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/8.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/9.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/10.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/11.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/12.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/13.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/14.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/15.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/16.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/17.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/21.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/22.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/23.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/24.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/25.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/26.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/18.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/19.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/1.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/2.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/3.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/4.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/5.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/11.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/14.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/15.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/16.jpg",
            id: Math.random()
        },
        {
            img: "images/prophetess/8.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/20.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/27.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/28.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/29.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/30.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/31.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/33.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/32.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/52.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/53.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/54.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/54.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/55.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/56.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/57.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/34.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/35.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/36.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/37.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/38.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/39.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/40.jpg",
            id: Math.random()
        },
        {
            img: "images/gallery/44.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/45.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/46.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/47.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/48.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/49.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/50.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/51.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/58.jpeg",
            id: Math.random()
        },
        {
            img: "images/gallery/60.jpeg",
            id: Math.random()
        },
    ])

    return (
        <div className="row">
            {images.map((image) => {
                return(
                    <Col className="mb-3" md="6" lg="3" >  <GalleryCard key={image.id} image={image} /> </Col>
                )
            })}
        </div>
    )
}

export default GalleryList
