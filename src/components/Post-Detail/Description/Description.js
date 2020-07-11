import React from "react";

// react-bootstrap
import { Button } from "react-bootstrap";

import styles from "./Description.module.scss";

const Description = ({ authorName, category, description }) => (
  <div className={styles.description}>
    <div className={styles.wrapper}>
      <strong className={styles.likes}>{authorName}</strong>
      <strong className={styles.strong}>{category}</strong>
    </div>
    <div>{description}</div>
    <div className={styles.download}>
      <div className={styles.mainText}>Source: www.google.com</div>
      <div className={styles.subText}>click below to view</div>
      <Button variant="outline-success" size="sm">
        View PDF
      </Button>
    </div>
  </div>
);

export default Description;
