import { useRouter } from "next/router";
import React from "react";

import styles from "../styles/Navbar.module.scss";
import { Inter } from "@next/font/google";

import { Icon } from "@iconify/react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter();
  const getName = () => {
    const name = router.pathname;
    console.log(name);
    if (name === "/") {
      return "Dashboard";
    } else {
      return name;
    }
  };

  return (
    <div className={[inter.className, styles.main].join(" ")}>
      <h1>{getName()}</h1>
      <div className={styles.usersec}>
        <div>
          <Icon icon="mdi:bell-badge-outline" />
          <Icon icon="mdi:bell-outline" />
        </div>
        <div className={styles.profile}>
          <Image src={"/blank-profile-picture-973460.svg"} fill />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
