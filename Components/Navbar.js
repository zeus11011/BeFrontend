import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { Inter } from "@next/font/google";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div>
          <p>Don Joe</p>
          <div>
            {isOpen && (
              <div
                className={styles.backdropstyles}
                onClick={handleBackdropClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
              >
                <div style={drawerStyles}>
                  <button onClick={handleBackdropClick}>CLOSE</button>
                  <p>MY PROFILE</p>
                  <p>SETTINGS</p>
                  <p>LOG OUT</p>
                  <p>CONTACT US</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.button}
            >
              Open Drawer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
