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
      return name.slice(1);
    }
  };

  return (
    <div className={[inter.className, styles.main].join(" ")}>
      <div className={styles.namesec}>
        <h1>{getName()}</h1>
      </div>
      <div className={styles.usersec}>
        <div>
          {true ? (
            <Icon icon="mdi:bell-badge-outline" height={50} />
          ) : (
            <Icon icon="mdi:bell-outline" height={50} />
          )}
        </div>
        <div className={styles.profile}>
          <Image
            src={"/blank-profile-picture-973460.svg"}
            width={80}
            height={80}
            className={styles.im}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
