import React from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <div className={styles.backgroundImg} />
    </div>
  );
};

export default Layout;
