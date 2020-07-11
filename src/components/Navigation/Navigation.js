import React from "react";
import HomeIcon from "react-icons/lib/fa/home";
import { Link } from "gatsby";

// react-bootstrap
import { Nav, Navbar, Container } from "react-bootstrap";

import useSiteMetadata from "../../hooks/use-site-metadata";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <header className={styles.navigation}>
      <Navbar expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Link to="/" className="_link-no-style">
            <h1>
              <HomeIcon className={styles.homeIcon} />
              <Navbar.Brand as="span">
                <span>{siteMetadata.title}</span>
              </Navbar.Brand>
            </h1>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Link to="/about" className={styles.linkNoStyle}>
                <Nav.Link as="span">About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
