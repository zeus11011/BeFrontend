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
    } else if (name === "/Profile") {
      return "My Profile";
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
            <Icon icon="mdi:bell-badge-outline" height={"4rem"} />
          ) : (
            <Icon icon="mdi:bell-outline" height={"4rem"} />
          )}
        </div>
        <div className={styles.profile}>
          <Image
            onClick={() => {
              router.push("Profile");
            }}
            alt=""
            src={"/dp.jpg"}
            width={80}
            height={80}
            className={styles.im}
            style={{ borderRadius: "50%", marginTop: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
