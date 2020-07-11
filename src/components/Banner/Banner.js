import React from "react";

// react-bootstrap
import { Jumbotron, Container } from "react-bootstrap";

import useSiteMetadata from "../../hooks/use-site-metadata";

import styles from "./Banner.module.scss";

const Banner = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Jumbotron className={styles.banner}>
      <Container>
        <h1>{siteMetadata.title}</h1>
        <p className="lead text-muted">{siteMetadata.description}</p>
      </Container>
    </Jumbotron>
  );
};

export default Banner;
