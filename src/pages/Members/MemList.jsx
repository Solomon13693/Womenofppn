import React, {useState} from 'react'
import { Col } from 'reactstrap'
import MemCard from "./MemCard"

function MemList() {

    const [images] = useState([
        {
            img: "images/members/1.jpg",
            id: Math.random()
        },
        {
            img: "images/members/2.jpg",
            id: Math.random()
        },
        {
            img: "images/members/3.jpg",
            id: Math.random()
        },
        {
            img: "images/members/4.jpg",
            id: Math.random()
        },
        {
            img: "images/members/5.jpg",
            id: Math.random()
        },
        {
            img: "images/members/6.jpg",
            id: Math.random()
        },
        {
            img: "images/members/7.jpg",
            id: Math.random()
        },
        {
            img: "images/members/8.jpg",
            id: Math.random()
        },
        {
            img: "images/members/9.jpg",
            id: Math.random()
        },
        {
            img: "images/members/10.jpg",
            id: Math.random()
        },
        {
            img: "images/members/11.jpg",
            id: Math.random()
        },
        {
            img: "images/members/12.jpg",
            id: Math.random()
        },
        {
            img: "images/members/13.jpg",
            id: Math.random()
        },
        {
            img: "images/members/14.jpg",
            id: Math.random()
        },
        {
            img: "images/members/15.jpg",
            id: Math.random()
        },
        {
            img: "images/members/16.jpg",
            id: Math.random()
        },
        {
            img: "images/members/17.jpg",
            id: Math.random()
        },
        {
            img: "images/members/18.jpg",
            id: Math.random()
        },
        {
            img: "images/members/19.jpg",
            id: Math.random()
        },
        {
            img: "images/members/20.jpg",
            id: Math.random()
        },
        {
            img: "images/members/21.jpg",
            id: Math.random()
        },
        {
            img: "images/members/22.jpg",
            id: Math.random()
        },
        {
            img: "images/members/23.jpg",
            id: Math.random()
        },
        {
            img: "images/members/24.jpg",
            id: Math.random()
        },
        {
            img: "images/members/25.jpg",
            id: Math.random()
        },
        {
            img: "images/members/26.jpg",
            id: Math.random()
        },
        {
            img: "images/members/27.jpg",
            id: Math.random()
        },
        {
            img: "images/members/28.jpg",
            id: Math.random()
        },
        {
            img: "images/members/29.jpg",
            id: Math.random()
        },
        {
            img: "images/members/30.jpg",
            id: Math.random()
        },
        {
            img: "images/members/31.jpg",
            id: Math.random()
        },
        {
            img: "images/members/32.jpg",
            id: Math.random()
        },
        {
            img: "images/members/33.jpg",
            id: Math.random()
        },
        {
            img: "images/members/34.jpg",
            id: Math.random()
        },
        {
            img: "images/members/35.jpg",
            id: Math.random()
        },
        {
            img: "images/members/36.jpg",
            id: Math.random()
        },
        {
            img: "images/members/37.jpg",
            id: Math.random()
        },
        {
            img: "images/members/38.jpg",
            id: Math.random()
        },
        {
            img: "images/members/39.jpg",
            id: Math.random()
        },
        {
            img: "images/members/40.jpg",
            id: Math.random()
        },
        {
            img: "images/members/41.jpg",
            id: Math.random()
        },
        {
            img: "images/members/42.jpg",
            id: Math.random()
        },
        {
            img: "images/members/43.jpg",
            id: Math.random()
        },
        {
            img: "images/members/44.jpg",
            id: Math.random()
        },
        {
            img: "images/members/45.jpg",
            id: Math.random()
        },
        {
            img: "images/members/46.jpg",
            id: Math.random()
        },
        {
            img: "images/members/47.jpg",
            id: Math.random()
        },
        {
            img: "images/members/48.jpg",
            id: Math.random()
        },
        {
            img: "images/members/49.jpg",
            id: Math.random()
        },
        {
            img: "images/members/50.jpg",
            id: Math.random()
        },
        {
            img: "images/members/51.jpg",
            id: Math.random()
        },
        {
            img: "images/members/52.jpg",
            id: Math.random()
        },
        {
            img: "images/members/53.jpg",
            id: Math.random()
        },
        {
            img: "images/members/54.jpg",
            id: Math.random()
        },
        {
            img: "images/members/55.jpg",
            id: Math.random()
        },
        {
            img: "images/members/56.jpg",
            id: Math.random()
        },
        {
            img: "images/members/57.jpg",
            id: Math.random()
        },
        {
            img: "images/members/58.jpg",
            id: Math.random()
        },
        {
            img: "images/members/59.jpg",
            id: Math.random()
        },
        {
            img: "images/members/60.jpg",
            id: Math.random()
        },
        {
            img: "images/members/61.jpg",
            id: Math.random()
        },
        {
            img: "images/members/62.jpg",
            id: Math.random()
        },
        {
            img: "images/members/63.jpg",
            id: Math.random()
        },
        {
            img: "images/members/64.jpg",
            id: Math.random()
        },
        {
            img: "images/members/65.jpg",
            id: Math.random()
        },
        {
            img: "images/members/66.jpg",
            id: Math.random()
        },
        {
            img: "images/members/67.jpg",
            id: Math.random()
        },
        {
            img: "images/members/68.jpg",
            id: Math.random()
        },
        {
            img: "images/members/69.jpg",
            id: Math.random()
        },
        {
            img: "images/members/70.jpg",
            id: Math.random()
        },
        {
            img: "images/members/71.jpg",
            id: Math.random()
        },
        {
            img: "images/members/72.jpg",
            id: Math.random()
        },
        {
            img: "images/members/73.jpg",
            id: Math.random()
        },
        {
            img: "images/members/74.jpg",
            id: Math.random()
        },
        {
            img: "images/members/75.jpg",
            id: Math.random()
        },
        {
            img: "images/members/76.jpg",
            id: Math.random()
        },
        {
            img: "images/members/77.jpg",
            id: Math.random()
        },
        {
            img: "images/members/78.jpg",
            id: Math.random()
        },
        {
            img: "images/members/79.jpg",
            id: Math.random()
        },
        {
            img: "images/members/80.jpg",
            id: Math.random()
        },
        {
            img: "images/members/81.jpg",
            id: Math.random()
        },
        {
            img: "images/members/82.jpg",
            id: Math.random()
        },
        {
            img: "images/members/83.jpg",
            id: Math.random()
        },
        {
            img: "images/members/84.jpg",
            id: Math.random()
        },
        {
            img: "images/members/85.jpg",
            id: Math.random()
        },
        {
            img: "images/members/86.jpg",
            id: Math.random()
        },
        {
            img: "images/members/87.jpg",
            id: Math.random()
        },
        {
            img: "images/members/88.jpg",
            id: Math.random()
        },
        {
            img: "images/members/89.jpg",
            id: Math.random()
        },
        {
            img: "images/members/99.jpg",
            id: Math.random()
        },
        {
            img: "images/members/91.jpg",
            id: Math.random()
        },
        {
            img: "images/members/92.jpg",
            id: Math.random()
        },
        {
            img: "images/members/93.jpg",
            id: Math.random()
        },
        {
            img: "images/members/94.jpg",
            id: Math.random()
        },
        {
            img: "images/members/95.jpg",
            id: Math.random()
        },
        {
            img: "images/members/96.jpg",
            id: Math.random()
        },
        {
            img: "images/members/97.jpg",
            id: Math.random()
        },
        {
            img: "images/members/98.jpg",
            id: Math.random()
        },
        {
            img: "images/members/99.jpg",
            id: Math.random()
        },
        {
            img: "images/members/100.jpg",
            id: Math.random()
        },
        {
            img: "images/members/101.jpg",
            id: Math.random()
        },
        {
            img: "images/members/102.jpg",
            id: Math.random()
        },
        {
            img: "images/members/103.jpg",
            id: Math.random()
        },
        {
            img: "images/members/104.jpg",
            id: Math.random()
        },
        {
            img: "images/members/105.jpg",
            id: Math.random()
        },
        {
            img: "images/members/106.jpg",
            id: Math.random()
        },
        {
            img: "images/members/107.jpg",
            id: Math.random()
        },
        {
            img: "images/members/108.jpg",
            id: Math.random()
        },
        {
            img: "images/members/109.jpg",
            id: Math.random()
        },
        {
            img: "images/members/110.jpg",
            id: Math.random()
        },
        {
            img: "images/members/111.jpg",
            id: Math.random()
        },
        {
            img: "images/members/112.jpg",
            id: Math.random()
        },
        {
            img: "images/members/113.jpg",
            id: Math.random()
        },
        {
            img: "images/members/114.jpg",
            id: Math.random()
        },
        {
            img: "images/members/115.jpg",
            id: Math.random()
        },
        {
            img: "images/members/116.jpg",
            id: Math.random()
        },
        {
            img: "images/members/117.jpg",
            id: Math.random()
        },
        {
            img: "images/members/118.jpg",
            id: Math.random()
        },
        {
            img: "images/members/119.jpg",
            id: Math.random()
        },
        {
            img: "images/members/120.jpg",
            id: Math.random()
        },
        {
            img: "images/members/121.jpg",
            id: Math.random()
        },
        {
            img: "images/members/122.jpg",
            id: Math.random()
        },
        {
            img: "images/members/123.jpg",
            id: Math.random()
        },
        {
            img: "images/members/124.jpg",
            id: Math.random()
        },
        {
            img: "images/members/125.jpg",
            id: Math.random()
        },
        {
            img: "images/members/126.jpg",
            id: Math.random()
        },
        {
            img: "images/members/127.jpg",
            id: Math.random()
        },
        {
            img: "images/members/128.jpg",
            id: Math.random()
        },
        {
            img: "images/members/129.jpg",
            id: Math.random()
        },
        {
            img: "images/members/130.jpg",
            id: Math.random()
        },
        {
            img: "images/members/131.jpg",
            id: Math.random()
        },
        {
            img: "images/members/132.jpg",
            id: Math.random()
        },
        {
            img: "images/members/133.jpg",
            id: Math.random()
        },
        {
            img: "images/members/134.jpg",
            id: Math.random()
        },
        {
            img: "images/members/135.jpg",
            id: Math.random()
        },
        {
            img: "images/members/136.jpg",
            id: Math.random()
        },
        {
            img: "images/members/137.jpg",
            id: Math.random()
        },
        {
            img: "images/members/138.jpg",
            id: Math.random()
        },
        {
            img: "images/members/139.jpg",
            id: Math.random()
        },
        {
            img: "images/members/140.jpg",
            id: Math.random()
        },
        {
            img: "images/members/141.jpg",
            id: Math.random()
        },
        {
            img: "images/members/142.jpg",
            id: Math.random()
        },
        {
            img: "images/members/143.jpg",
            id: Math.random()
        },
        {
            img: "images/members/144.jpg",
            id: Math.random()
        },
        {
            img: "images/members/145.jpg",
            id: Math.random()
        },
        {
            img: "images/members/146.jpg",
            id: Math.random()
        },
        {
            img: "images/members/147.jpg",
            id: Math.random()
        },
        {
            img: "images/members/148.jpg",
            id: Math.random()
        },
        {
            img: "images/members/149.jpg",
            id: Math.random()
        },
        {
            img: "images/members/150.jpg",
            id: Math.random()
        },
        {
            img: "images/members/151.jpg",
            id: Math.random()
        },
        {
            img: "images/members/152.jpg",
            id: Math.random()
        },
        {
            img: "images/members/153.jpg",
            id: Math.random()
        },
        {
            img: "images/members/154.jpg",
            id: Math.random()
        },
        {
            img: "images/members/155.jpg",
            id: Math.random()
        },
        {
            img: "images/members/156.jpg",
            id: Math.random()
        },
        {
            img: "images/members/157.jpg",
            id: Math.random()
        },
        {
            img: "images/members/158.jpg",
            id: Math.random()
        },
        {
            img: "images/members/159.jpg",
            id: Math.random()
        },
    ])

    return (
        <div className="row">
            {images.map((image) => {
                return(
                    <Col className="mb-3" md="6" lg="3" >  <MemCard key={image.id} image={image} /> </Col>
                )
            })}
        </div>
    )
}

export default MemList
