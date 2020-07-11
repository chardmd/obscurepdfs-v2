import React from "react";

import styles from "./Userbar.module.scss";

const Userbar = ({ avatar, title }) => (
  <div className={styles.usebar}>
    <img src={avatar} alt={title} className={styles.postDetailAvatar} />
    <h6 className={styles.postDetailUsername}>{title}</h6>
  </div>
);

export default Userbar;
