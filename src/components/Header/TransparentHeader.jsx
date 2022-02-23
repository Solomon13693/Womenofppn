import React from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function TransparentHeader() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand tag={Link} to="/"  id="navbar-brand">
            <span> <img className="nav_logo" src="/images/logo/prayer-network-logo-png.png" alt="" /> </span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
          Women of Fire Prophetic Prayer Network. <br /> God has the final say
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <NavbarBrand tag={Link} to="/"  id="navbar-brand">
                <span> <img className="nav_logo" src="/images/logo/prayer-network-logo-png.png" alt="" /> </span>
                    </NavbarBrand>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i class="fas fa-times-circle"></i>
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>

          <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>

             {/* <!-- About --> */}

             <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                About
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/about" >
                  About Us
                </DropdownItem>
                <DropdownItem tag={Link} to="/prophetess">
                  About Prophetess
                </DropdownItem>
                <DropdownItem tag={Link} to="/history">
                  Our History
                </DropdownItem>
                <DropdownItem tag={Link} to="/team">
                  Our Team
                </DropdownItem>
                <DropdownItem tag={Link} to="/members">
                  Members
                </DropdownItem>
                <DropdownItem tag={Link} to="/directors">
                  Board of Directors
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink tag={Link} to="/programmes">
                Our Programmes
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/live">
                Live
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/support">
                Support
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/gallery">
                Photo Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/responsibility">
                Corporate Responsibility
              </NavLink>
            </NavItem>

            {/* <!-- Contact --> */}
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                Contact
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/prayer" >
                  Prayer Request
                </DropdownItem>
                <DropdownItem tag={Link} to="/testimony">
                  Testimony
                </DropdownItem>
                <DropdownItem tag={Link} to="/partnership">
                 Partnership
                </DropdownItem>
                <DropdownItem tag={Link} to="/representatives">
                  Countries Representatives
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
