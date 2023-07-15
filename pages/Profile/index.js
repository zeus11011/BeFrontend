import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Profile.module.scss";
import { useSelector } from "react-redux";

const index = () => {
  const options = ["2000", "2001", "2002", "2003", "2004"];

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const user = useSelector((state) => state.user.value);

  if (user == null) return <></>;
  return (
    <div className={styles.main}>
      <div className={styles.mainbox}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.image}>
              <Image
                alt=""
                src={user.profilepic}
                height={160}
                width={160}
                style={{ borderRadius: "50%" }}
              ></Image>
            </div>
            <div className={styles.div}>
              <h1 className={styles.h1x}>Don Joe</h1>
              <h2 className={styles.h2x}>
                Update your photo and other details
              </h2>
            </div>
          </div>
          <div className={styles.MainCon}>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={[styles.div2, styles.border].join(" ")}>
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
                          type="text"
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
                        <h2 className={styles.h2}>Username</h2>
                      </div>
                      <div>
                        <input
                          type="text"
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
                          type="password"
                          name="lname"
                          placeholder="Password"
                          className={styles.textfield_2}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container5}>
                <div className={[styles.div2, styles.border2].join(" ")}>
                  <h1 className={styles.h1}>Academic</h1>
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
                          type="text"
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
                        <h2 className={styles.h2}>Designation</h2>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Designation"
                          className={styles.textfield_2}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.detail}></div>
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
    </div>
  );
};

export default index;
