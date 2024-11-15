import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { GiArchiveResearch } from "react-icons/gi";
import { PiCalendarPlusDuotone } from "react-icons/pi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import { PiPaintBrushBold } from "react-icons/pi";
import { MdFlight, MdQuiz } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Academics
              </Nav.Link>
            </Nav.Item> */}

            <NavDropdown title="Academics" className="custom-nav-dropdown">
              <Nav.Item> 
                <Nav.Link
                  as={Link}
                  to="/interns_and_research"
                  onClick={() => updateExpanded(false)}
                ><GiArchiveResearch style={{ marginBottom: "2px" }}
                />{" "}Internships & Research
                </Nav.Link>
              </Nav.Item>
              <NavDropdown.Divider />
              <Nav.Item> 
                <Nav.Link
                  as={Link}
                  to="/projects"
                  onClick={() => updateExpanded(false)}
                ><AiOutlineFundProjectionScreen
                style={{ marginBottom: "2px" }}
              />{" "}Projects
                </Nav.Link>
              </Nav.Item>
              <NavDropdown.Divider />
              <Nav.Item> 
                <Nav.Link
                  as={Link}
                  to="/courses"
                  onClick={() => updateExpanded(false)}
                ><HiMiniPencilSquare
                style={{ marginBottom: "2px" }}
              />{" "}Courses
                </Nav.Link>
              </Nav.Item>
          </NavDropdown>


          <Nav.Item>
              <Nav.Link
                as={Link}
                to="/extra_curriculars"
                onClick={() => updateExpanded(false)}
              >
                <PiCalendarPlusDuotone
                  style={{ marginBottom: "2px" }}
                />{" "}
                  Extra-Curriculars
              </Nav.Link>
          </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/hobbies"
                onClick={() => updateExpanded(false)}
              >
                Hobbies
              </Nav.Link>
            </Nav.Item> */}

            <NavDropdown title="Recreation" className="custom-nav-dropdown">
              <Nav.Item> 
                <Nav.Link
                  as={Link}
                  to="/hobbies"
                  onClick={() => updateExpanded(false)}
                ><PiPaintBrushBold style={{ marginBottom: "2px" }}
                />{" "}Hobbies
                </Nav.Link>
              </Nav.Item>
              <NavDropdown.Divider />
              <Nav.Item> 
                <Nav.Link
                  as={Link}
                  to="/photos"
                  onClick={() => updateExpanded(false)}
                ><IoMdPhotos style={{ marginBottom: "2px" }}
              />{" "}Album
                </Nav.Link>
              </Nav.Item>
          </NavDropdown>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Sandeepan-Naskar/sandeepan-naskar.github.io"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
