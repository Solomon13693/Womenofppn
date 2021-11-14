import React from "react";
import { Link } from "react-router-dom";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function Footer() {
    return (
        <footer className=" footer">
        <Container>
          <Row className="d-flex align-items-center  justify-content-md-between">

            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}
                <Link to="/">Women of Fire Prophetic Prayer Network</Link>
              </div>
            </Col>

            <Col md="6" className="d-flex justify-content-center justify-content-sm-end ">
              <Nav className="d-flex ">

                <NavItem className="px-4">
                  <NavLink tag={Link} to="/about" >
                    About Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to="/prayer" >
                    Contact
                  </NavLink>
                </NavItem>

              </Nav>
            </Col>

          </Row>
        </Container>
      </footer>
    )
}

export default Footer
