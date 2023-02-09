import React from "react";
import Drawer from "../Components/Drawer";
import Navbar from "../Components/Navbar";

import styles from "../styles/Drawerlayout.module.scss";

const DrawerLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Drawer />
      <div className={styles.cont}>
        <Navbar />
        <div className={styles.child}>{children}</div>
      </div>
    </div>
  );
};

export default DrawerLayout;
