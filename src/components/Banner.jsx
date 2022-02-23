import React from 'react'
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
  import movieBg from '../assets/images/banner.mp4';
import Mission from './Modal/Mission';
import Vision from './Modal/Vision';

function Banner() {
    return (
        <div className="banner ">

                 <video className="bgMovie" style={{
                  
                 }} autoPlay loop muted>
                      <source src={movieBg} />
                  </video>


            <div className="side_icons">

                <a href="https://www.facebook.com/Women-of-fire-prophetic-prayer-network-worldwide-101281218853774?_rdc=1&_rdr" target="_blank" rel="noreferrer"><i style={{color: "#3b5998 "}} className="fab fa-facebook"></i></a>

                <a href="https://www.instagram.com/explore/tags/womenoffirepropheticprayernetwork/" target="_blank" rel="noreferrer"> <i style={{color: "#833AB4"}} className="fab fa-instagram"></i></a>

                  <a href="https://twitter.com/LydiaMarkKing1" target="_blank"><i style={{color: "#1DA1F2"}} className="fab fa-twitter" rel="noreferrer" ></i></a>

                  <a href="https://t.me/womenoffireppn" target="_blank"><i style={{color: "#1DA1F2"}} className="fab fa-telegram" rel="noreferrer" ></i></a>

                  <a href="https://www.youtube.com/channel/UC-uZ8gkj6gdBy0vdXdsmrsQ" target="_blank" rel="noreferrer" ><i style={{color: "#FF0000"}} className="fab fa-youtube"></i></a>

                  <a href="https://api.whatsapp.com/message/BPRL3S73KL4VH1" target="_blank"><i style={{color: "#25D366"}}className="fab fa-whatsapp" rel="noreferrer" ></i></a>

                  <a href="https://www.linkedin.com/in/lydia-e-king-427753222/" target="_blank"><i style={{color: "#0274b3"}}className="fab fa-linkedin" rel="noreferrer" ></i></a>
                    
            </div>
            

            <Container className="align-items-center">
            <Row>
              

              <Col className="content" lg="7" md="7" >
                <h5 className="text-on-back">Welcome!</h5>
                <p className="banner_description">
                A place where prayer is the ultimate tool to wrestle, wins, heals, build intimacy, gain understanding, strengthens, comfort, find alignment and achieve victories over every problems.
                </p>
              </Col>
        
            </Row>

                <div className="banner_btn d-flex align-items-center justify-content-between flex-wrap">

                <div id="mission" color="primary">
                    <Mission/>
                    <UncontrolledTooltip placement="bottom" target="mission">
                    Mision of Women of Fire Prophetic Prayer Network
                    </UncontrolledTooltip>
                </div>

                <div  id="vision" color="primary">
                      <Vision/>
                        <UncontrolledTooltip placement="bottom" target="vision">
                          Vision of Women of Fire Prophetic Prayer Network
                    </UncontrolledTooltip>
                </div>

                <Button tag={Link} to="/join" className="btn-neutral shadow-lg" id="join" color="primary">
                    Join Us
                    <UncontrolledTooltip placement="bottom" target="join">
                    Join Women of Fire Prophetic Prayer Network
                    </UncontrolledTooltip>
                </Button>

                <Button tag={Link} to="/prayer" className="btn-neutral shadow-lg" id="btn-neutral" color="primary">
                    Contact Us
                    <UncontrolledTooltip placement="bottom" target="btn-neutral">
                    Contact Women of Fire Prophetic Prayer Network
                    </UncontrolledTooltip>
                </Button>

                </div>

          </Container>
          
        </div>
    )
}

export default Banner
