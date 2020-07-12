import React from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

import styles from "./Page.module.scss";

const Page = ({ title, children }) => {
  return (
    <Container>
      <div className={styles.page}>
        {title && <h1>{title}</h1>}
        <div>{children}</div>
      </div>
    </Container>
  );
};

export default Page;
