import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { Inter } from "@next/font/google";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileDropdown from "./ProfileDropdown";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };
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

  const drawerStyles = {
    backgroundColor: "white",
    width: "350px",
    height: "60vh",
    marginTop: "9.5rem",
    marginRight: "2rem",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    position: "fixed",
    right: isOpen ? "0" : "-300px",
    top: "0",
    transition: "right 0.3s ease-out",
    zIndex: "10",
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
        <div className={styles.dropdownCon}>
          <ProfileDropdown />
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
            className={styles.img}
            style={{ borderRadius: "50%", marginTop: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
