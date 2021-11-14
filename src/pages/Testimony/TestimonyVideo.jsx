import React from 'react'
import { Row, Col } from 'reactstrap'

export const TestimonyVideo = () => {
    return (
        <div className="text-center my-5">

        <h3 className="fw-bold mb-5">Testimony videos</h3>

            <Row>

                <Col md="4">
                        <video className="shadow" width="320" height="240" controls>
                            <source src="/videos/1.mp4" type="video/mp4" />
                        </video>
                </Col>

                <Col md="4">
                        <video className="shadow" width="320" height="240" controls>
                            <source src="/videos/2.mp4" type="video/mp4" />
                        </video>
                </Col>

                <Col md="4">
                        <video className="shadow" width="320" height="240" controls>
                            <source src="/videos/3.mp4" type="video/mp4" />
                        </video>
                </Col>

            </Row>
            <a href="http://testimony.womenoffireppn.info/" target="_blank" rel="noopener noreferrer">
             <button className="btn btn-primary mt-4">View more testimony videos</button>
            </a>
        </div>
    )
}
