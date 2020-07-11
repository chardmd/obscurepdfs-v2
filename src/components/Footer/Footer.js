import React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "../../hooks/use-site-metadata";

import styles from "./Footer.module.scss";

const Footer = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <footer className={styles.footer}>
      <p className={styles.wrapper}>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/contact">Contact</Link>
      </p>
      <p>{siteMetadata.copyright}</p>
    </footer>
  );
};

export default Footer;
