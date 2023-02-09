import React from "react";
import Image from "next/image";
import styles from "../../styles/Profile.module.scss";
const index = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.image}>
            <Image
              src={"/blank-profile-picture-973460.svg"}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            ></Image>
          </div>
          <div className={styles.div1}>
            <h1 className={styles.h1}>Profile</h1>
            <h2>Update your photo and other details</h2>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={[styles.div2, styles.border].join(" ")}>
            <h1 className={styles.h1}>Personal</h1>
            <h2>Update your photo and other details</h2>
          </div>
          <div className={styles.div2}>
            <h1 className={styles.h1}>Acedemic</h1>
            <h2>Update your photo and other details</h2>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <button name="save" onClick="" className={styles.button}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default index;
