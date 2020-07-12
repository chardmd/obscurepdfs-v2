import React from "react";

// react-bootstrap
import { Badge } from "react-bootstrap";

import getDomain from "../../../utils/get-domain";

import styles from "./Description.module.scss";

const Description = ({ category, url }) => (
  <div className={styles.description}>
    <div className={styles.download}>
      <h5>
        <Badge pill variant="info" className={styles.likes}>
          {category}
        </Badge>
      </h5>
      <div className={styles.subText}>source: {getDomain(url, true)}</div>
    </div>
  </div>
);

export default Description;
