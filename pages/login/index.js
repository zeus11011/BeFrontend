import React from "react";
import styles from "../../styles/Login.module.scss";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import Link from "next/link";
function login() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Image src={"/gec.svg"} alt="" height={330} width={400} />
      </div>
      <div className={styles.container2}>
        <div className={styles.maincont}>
          <div className={styles.h1container}>
            <h1 className={styles.h1}> LOGIN</h1>
            <h2 className={styles.h2C}>STUDENT | ADMIN</h2>
          </div>
          <div className={styles.link2}>
            <Link href="/" style={{ color: "black" }}>
              {" "}
              {"Click here for admin login"}
            </Link>
          </div>
          <div className={styles.box}>
            <div className={styles.box2}>
              <h2 className={styles.h2}>Username</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.textfiled}
              ></input>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box2}>
              <h2 className={styles.h2}>Password</h2>
              <input
                type="password"
                name="email"
                placeholder="Password"
                className={styles.textfiled}
              ></input>
            </div>
          </div>
          <div className={styles.box5}>
            <Checkbox
              label="checkbox"
              value="true"
              onChange=""
              className={styles.checkbox}
            ></Checkbox>
            Remember Password?
          </div>
          <div className={styles.box4}>
            <button name="login" onClick="" className={styles.button}>
              Log In
            </button>
            <div className={styles.box3}>
              {"Forgot "}
              <div className={styles.link}>
                <Link href="/" style={{ color: "black" }}>
                  {" "}
                  {"Username / Password?"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

login.getLayout = function PageLayout(page) {
  return <> {page}</>;
};
