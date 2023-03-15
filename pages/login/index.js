import React from "react";
import styles from "../../styles/Login.module.scss";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import Link from "next/link";

function admin() {
  return (
    <div className={styles.main}>
      <div className={styles.con1}>
        <Image src={"/gec.svg"} alt="" height={300} width={300} />
      </div>
      <div className={styles.con2}>
        <div className={styles.card}>
          <div className={styles.maincont}>
            <div className={styles.h1container}>
              <h1 className={styles.h1}> LOGIN</h1>
              <h2 className={styles.h2C}>STAFF | FACULTY</h2>
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
              <div className={styles.buttbox}>
                <button name="login" onClick="" className={styles.button}>
                  Log In
                </button>
              </div>

              <div className={styles.box3}>
                {"Forgot "}
                <div className={styles.link}>
                  <Link href="/"> {"Username / Password?"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default admin;

admin.getLayout = function PageLayout(page) {
  return <> {page}</>;
};
