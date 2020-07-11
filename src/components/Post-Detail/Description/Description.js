import React from "react";

// react-bootstrap
import { Button } from "react-bootstrap";

import getDomain from "../../../utils/get-domain";

import styles from "./Description.module.scss";

const Description = ({ category, url }) => (
  <div className={styles.description}>
    <div className={styles.wrapper}>
      <strong className={styles.likes}>{category}</strong>
    </div>
    <div className={styles.download}>
      <div className={styles.mainText}>Click the button to view</div>
      <div className={styles.subText}>source: {getDomain(url, true)}</div>
      <Button
        href={url}
        rel="nofollow noopener noreferrer"
        target="_blank"
        variant="success"
        size="sm"
      >
        View PDF
      </Button>
    </div>
  </div>
);

export default Description;
