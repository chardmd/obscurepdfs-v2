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
      <div className={styles.mainText}>Standard, 2286 x 2756px</div>
      <div className={styles.subText}>JPG, Size: 5.41 MB, 300dpi</div>
      <Button variant="outline-success" size="sm">
        Download
      </Button>
    </div>
  </div>
);

export default Description;
