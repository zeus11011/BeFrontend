import Image from "next/image";
import React from "react";
import styles from "../styles/Drawer.module.scss";
// import { Inter } from "@next/font/google";

function Drawer() {
  //   const inter = Inter({ subsets: ["latin"] });
  return (
    <div className={styles.drawer}>
      <Image src={"/gec.png"} height={125} width={150} />
      <h1>Home</h1>
      <h1>Archive</h1>
      <h1>Anlytics</h1>
      <h1>Home</h1>
      <h1>Calendar</h1>
      <h1>Placed</h1>
    </div>
  );
}

export default Drawer;
