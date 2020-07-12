import React from "react";
import { Link } from "gatsby";

// react-bootstrap
import { Nav, Navbar, Container } from "react-bootstrap";

import useSiteMetadata from "../../hooks/use-site-metadata";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <header>
      <Navbar expand="md" bg="primary" variant="dark" fixed="top">
        <Container>
          <Link to="/" className="_link-no-style">
            <h1>
              <Navbar.Brand as="span">
                <span>{siteMetadata.title}</span>
              </Navbar.Brand>
            </h1>
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
