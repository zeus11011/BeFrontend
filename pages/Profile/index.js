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
          <div className={[styles.div1, styles.border].join(" ")}>
            <h1 className={styles.h1}>Personal</h1>
            <div className={styles.personal1}>
              <div className={styles.name}>
                <div>
                  <h2 className={styles.h2}>First Name</h2>
                </div>
                <div>
                  <input
                    type="text"
                    name="fname"
                    placeholder="Name"
                    className={styles.textfield_1}
                  ></input>
                </div>
              </div>
              <div className={styles.name2}>
                <div>
                  <h2 className={styles.h2}>Last Name</h2>
                </div>
                <div>
                  <input
                    type="name"
                    name="lname"
                    placeholder="Surname"
                    className={styles.textfield_1}
                  ></input>
                </div>
              </div>
            </div>
            <div className={styles.personal2}>
              <div className={styles.detail}>
                <div>
                  <h2 className={styles.h2}>Email</h2>
                </div>
                <div>
                  <input
                    type="fname"
                    name="fname"
                    placeholder="Email"
                    className={styles.textfield_2}
                  ></input>
                </div>
              </div>
              <div className={styles.detail}>
                <div>
                  {" "}
                  <h2 className={styles.h2}>Password</h2>
                </div>
                <div>
                  {" "}
                  <input
                    type="lname"
                    name="lname"
                    placeholder="Password"
                    className={styles.textfield_2}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.div2}>
              <h1 className={styles.h1}>Academic</h1>
              <div className={styles.academic1}>
                <div className={styles.year}>
                  <div>
                    <h2 className={styles.h2}>Year</h2>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="yearS"
                      placeholder="Start"
                      className={styles.textfield_3}
                    ></input>
                  </div>
                </div>
                <div className={styles.year}>
                  <div>
                    <input
                      type="number"
                      name="yearE"
                      placeholder="End"
                      className={styles.textfield_4}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={styles.academic2}>
                <div className={styles.desig}>
                  <div>
                    <h2 className={styles.h2}>Designation</h2>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="fname"
                      placeholder="Designation"
                      className={styles.textfield_5}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
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
