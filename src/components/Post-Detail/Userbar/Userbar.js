import React from "react";

import styles from "./Userbar.module.scss";

const Userbar = ({ title }) => (
  <div className={styles.usebar}>
    <h6 className={styles.postDetailUsername}>{title}</h6>
  </div>
);

export default Userbar;
